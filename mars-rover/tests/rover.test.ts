import { Rover } from '../src/rover';
import { Plateau } from '../src/plateau';

describe('Rover Tests', () => {
    const plateau = new Plateau(5, 5);

    test('should execute example input correctly', () => {
        const rover1 = new Rover(1, 2, 'N', plateau);
        rover1.executeCommands('LMLMLMLMM');
        expect(rover1.getPosition()).toBe('1 3 N');

        const rover2 = new Rover(3, 3, 'E', plateau);
        rover2.executeCommands('MMRMMRMRRM');
        expect(rover2.getPosition()).toBe('5 1 E');
    });
    test('should ignore invalid commands and process only valid ones', () => {
        const rover = new Rover(2, 2, 'E', plateau);
        rover.executeCommands('MXYZM');
        expect(rover.getPosition()).toBe('4 2 E');
    });    
    
});

