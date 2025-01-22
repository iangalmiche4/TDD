import { processInput } from './inputProcessor';

const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

const results = processInput(input);
console.log(results.join('\n')); // Affiche les positions finales des rovers
