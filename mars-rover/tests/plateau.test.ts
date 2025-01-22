import { Plateau } from '../src/plateau';

describe('Plateau', () => {
    test('should validate positions within bounds', () => {
        const plateau = new Plateau(5, 5);
        expect(plateau.isPositionValid(0, 0)).toBe(true);
        expect(plateau.isPositionValid(5, 5)).toBe(true);
        expect(plateau.isPositionValid(3, 4)).toBe(true);
    });

    test('should invalidate positions outside bounds', () => {
        const plateau = new Plateau(5, 5);
        expect(plateau.isPositionValid(-1, 0)).toBe(false);
        expect(plateau.isPositionValid(6, 5)).toBe(false);
        expect(plateau.isPositionValid(5, 6)).toBe(false);
    });
});
