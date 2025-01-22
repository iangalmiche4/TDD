# Mars Rover - Projet d'exploration de plateau sur Mars

## Description

Ce projet simule le déplacement de rovers robotisés sur un plateau rectangulaire sur Mars, tel que défini par les spécifications de la NASA. Chaque rover peut être contrôlé pour se déplacer et explorer le plateau en suivant des commandes simples. L'objectif est de permettre aux rovers de capturer une vue complète de l'environnement et de retourner leur position finale.

## Fonctionnement

Un plateau est défini par ses coordonnées supérieures droites, avec l'origine (0, 0) en bas à gauche. Les rovers sont positionnés sur ce plateau en spécifiant leurs coordonnées initiales et leur orientation (N, E, S, W).

### Commandes disponibles
- **L** : Tourner à gauche (90° dans le sens anti-horaire).
- **R** : Tourner à droite (90° dans le sens horaire).
- **M** : Avancer d'une case dans la direction actuelle.

### Exemple d'entrée et de sortie

#### Entrée :
```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

- **5 5** : Taille du plateau (coin supérieur droit).
- **1 2 N** : Position initiale et orientation du premier rover.
- **LMLMLMLMM** : Commandes pour le premier rover.
- **3 3 E** : Position initiale et orientation du second rover.
- **MMRMMRMRRM** : Commandes pour le second rover.

#### Sortie attendue :
```
1 3 N
5 1 E
```
- **1 3 N** : Position finale du premier rover.
- **5 1 E** : Position finale du second rover.

## Installation et exécution

1. **Cloner le projet** :
   ```bash
   git clone <URL-du-dépôt>
   cd mars-rover
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer les tests** :
   ```bash
   npm test
   ```

4. **Exécuter le programme** :
   ```bash
   npm start
   ```

## Structure du projet

- **src/** : Contient les fichiers principaux pour les classes Plateau, Rover et le traitement des entrées.
- **tests/** : Inclut les tests unitaires pour valider le comportement des différentes fonctionnalités.
- **README.md** : Documentation du projet.

## Tests

Les tests sont écrits avec Jest. Pour les exécuter, utilisez :
```bash
npm test
```
Les tests valident les scénarios suivants :
- Les rovers ne sortent pas des limites du plateau.
- Les commandes sont exécutées correctement.
- Les positions finales des rovers sont conformes aux attentes.

## Exemple d'exécution

Pour exécuter le programme avec un exemple d'entrée, utilisez :
```bash
npx ts-node src/main.ts
```
Sortie attendue :
```
1 3 N
5 1 E
```

## Auteur
Ian GALMICHE.

