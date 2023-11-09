# Getting Started

In the project directory, you can run:

### `npm start`

This will start the front end and backend servers concurrently.

### `npx playwright test`

This will start the front end ui tests.

### `npm run postman`

This will run the postman collection in newman.

## CI / CD

Github actions workflow is run on push and pull requests to main and master. This installs the dependencies for test, frontend server and backend server. Starts both servers and executes the UI and API tests, with the test reports attached to the action summary page in Github.