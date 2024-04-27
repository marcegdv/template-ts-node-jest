# REST service example with Typescript
*(under construction)*
### Project dependencies:

- **Main:**
    - axios
    - cors
    - express

Command: `npm i axios cors express`

- **Development:**
    - @types/cors
    - @types/express
    - @types/jest
    - @types/node 
    - jest
    - nodemon
    - ts-jest
    - ts-node
    - typescript

Command: `npm i -D @types/cors @types/express @types/jest @types/node jest nodemon supertest ts-jest ts-node typescript`

### Initializes tsconfig.json with default values:
Command: `npx tsc --init`

### Initializes jest.config.js with prompted values:
Command: `npx jest --init`

### Initializes GIT with defaults:
Command: `git -init`

### Scripts in package.json:
Example command: `npm run dev`
| Script name | Command |
| -----: | ------ |
| **dev**  | nodemon ./src/index.ts |
| **start**  | ts-node ./src/index.ts |
| **build**  | tsc --project tsconfig.json |
| **serve**  | node ./dist/src/index |
| **test** | jest |
| **cov**  | jest --coverage |
| **go** | npm run build && npm run serve |

## Branches
### Master - v0.1.0
Example code.