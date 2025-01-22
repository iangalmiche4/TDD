import { Plateau } from './plateau';
import { Rover } from './rover';

export function processInput(input: string): string[] {
    const lines = input.trim().split('\n').map(line => line.trim());
    if (lines.length < 3 || lines.length % 2 === 0) {
        throw new Error('Invalid input format');
    }

    const [width, height] = lines.shift()!.split(' ').map(Number);
    const plateau = new Plateau(width, height);

    const results: string[] = [];
    for (let i = 0; i < lines.length; i += 2) {
        const roverInput = lines[i];
        const commands = lines[i + 1];

        if (!roverInput.match(/^\d+ \d+ [NESW]$/)) {
            throw new Error('Invalid input format');
        }
        if (!commands.match(/^[LMR]*$/)) {
            throw new Error(`Invalid command format: ${commands}`);
        }
        

        const rover = Rover.fromInput(roverInput, plateau);
        rover.executeCommands(commands);
        results.push(rover.getPosition());
    }

    return results;
}
