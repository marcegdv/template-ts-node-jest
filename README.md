# REST service example with Typescript
*(under construction)*

### Endpoints:

| Method | Path | Description |
| --- | --- | ---|
| GET | / | Home page example in a string. |
| GET | /health | For running check. |
| GET | /datenager/:year/:countryCode | Get holydays for specified year and country. Values for year are 4 digits number, an countryCode ar 2 letters. [More info here](https://www.worldstandards.eu/other/tlds/).


### Project dependencies:

- **Main:**
    - axios
    - cors
    - express
    - swagger-jsdoc
    - swagger-ui-express

Command: `npm i axios cors express swagger-jsdoc swagger-ui-express`

- **Development:**
    - @types/cors
    - @types/express
    - @types/jest
    - @types/node 
    - @types/swagger-jsdoc
    - @types/swagger-ui-express
    - jest
    - nodemon
    - supertest
    - ts-jest
    - ts-node
    - typescript

Command: `npm i -D @types/cors @types/express @types/jest @types/node @types/swagger-jsdoc @types/swagger-ui-express jest nodemon supertest ts-jest ts-node typescript`

### Initializes package.json:
Command: `npm init -y`
Note: It initializes with version` 1.0.0` but in this example repository was changed to `0.1.0`.

### Initializes tsconfig.json with default values:
Command: `npx tsc --init`
Note: Other values was setted for this repository.

### Initializes jest.config.js with prompted values:
Command: `npx jest --init`
Note: Other values was setted for this repository.

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