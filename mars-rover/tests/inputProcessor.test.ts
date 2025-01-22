import { processInput } from "../src/inputProcessor";
describe('processInput', () => {
    test('should throw an error for invalid input format', () => {
        const invalidInput = `5 5
    1 2
    LMLMLMLMM`;
    
        expect(() => processInput(invalidInput)).toThrow('Invalid input format');
    });
    
    
    test('should process valid input and return correct output', () => {
        const validInput = `5 5
    1 2 N
    LMLMLMLMM
    3 3 E
    MMRMMRMRRM`;
    
        const expectedOutput = ['1 3 N', '5 1 E'];
        expect(processInput(validInput)).toEqual(expectedOutput);
    });    
});

