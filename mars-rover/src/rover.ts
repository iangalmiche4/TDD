import { Plateau } from './plateau';

type Direction = 'N' | 'E' | 'S' | 'W';

export class Rover {
    private x: number;
    private y: number;
    private direction: Direction;
    private plateau: Plateau;

    constructor(x: number, y: number, direction: Direction, plateau: Plateau) {
        if (!plateau.isPositionValid(x, y)) {
            throw new Error('Initial position is out of plateau bounds.');
        }
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.plateau = plateau;
    }

    static fromInput(input: string, plateau: Plateau): Rover {
        const [x, y, direction] = input.split(' ');
        if (!['N', 'E', 'S', 'W'].includes(direction)) {
            throw new Error(`Invalid direction: ${direction}`);
        }
        const posX = parseInt(x, 10);
        const posY = parseInt(y, 10);

        if (!plateau.isPositionValid(posX, posY)) {
            throw new Error(`Invalid position: (${posX}, ${posY}) is out of bounds.`);
        }

        return new Rover(posX, posY, direction as Direction, plateau);
    }

    executeCommands(commands: string): void {
        for (const command of commands) {
            if (!['L', 'R', 'M'].includes(command)) {
                console.warn(`Ignoring invalid command: ${command}`);
                continue;
            }
            switch (command) {
                case 'L':
                    this.rotateLeft();
                    break;
                case 'R':
                    this.rotateRight();
                    break;
                case 'M':
                    this.moveForward();
                    break;
            }
        }
    }
    

    getPosition(): string {
        return `${this.x} ${this.y} ${this.direction}`;
    }

    private rotateLeft(): void {
        const directions: Direction[] = ['N', 'W', 'S', 'E'];
        const newIndex = (directions.indexOf(this.direction) + 3) % 4;
        this.direction = directions[newIndex];
    }

    private rotateRight(): void {
        const directions: Direction[] = ['N', 'E', 'S', 'W'];
        const newIndex = (directions.indexOf(this.direction) + 1) % 4;
        this.direction = directions[newIndex];
    }

    private moveForward(): void {
        let nextX = this.x;
        let nextY = this.y;

        switch (this.direction) {
            case 'N':
                nextY++;
                break;
            case 'E':
                nextX++;
                break;
            case 'S':
                nextY--;
                break;
            case 'W':
                nextX--;
                break;
        }

        if (this.plateau.isPositionValid(nextX, nextY)) {
            this.x = nextX;
            this.y = nextY;
        }
    }
}
