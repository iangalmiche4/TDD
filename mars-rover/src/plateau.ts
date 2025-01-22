export class Plateau {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    isPositionValid(x: number, y: number): boolean {
        return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
    }
}
