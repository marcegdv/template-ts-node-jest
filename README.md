### Proyect packages needed:

- **Main:**
    - "axios": "^1.6.8",

Command: `npm i axios`

- **Development:**
    - "@types/jest": "^29.5.11",
    - "@types/node": "^20.11.0",
    - "jest": "^29.7.0",
    - "nodemon": "^3.1.0",
    - "ts-jest": "^29.1.1",
    - "ts-node": "^10.9.2",
    - "typescript": "^5.3.3"

Command: `npm i --save-dev @types/jest @types/node jest nodemon ts-jest ts-node typescript`

### Initializes tsconfig.json with default values:
Command: `npx tsc --init`

### Initializes GIT with defaults:
Command: `git -init`

### Scripts in **package.json**:
Example command: `npm run dev`
| Script name | Command |
| -----: | ------ |
| **dev**  | nodemon ./src/index.ts |
| **start**  | ts-node ./src/index.ts |
| **test** | jest |
| **cov**  | jest --coverage |
