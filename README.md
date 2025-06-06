# Sins Tournament Web App

The simple web app for the 4 Power 2 Balance sins of a solar empire tournament.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/sins-tournament.git
    cd sins-tournament
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

### Running the App

To start the development server, run:

```sh
npm start
```

### Linting

The project uses ESLint for code quality and consistency. To lint the codebase, run:

```sh
npm run lint
```

To automatically fix linting issues:

```sh
npm run lint:fix
```

### Editing Data

To make changes to the match pairs for the week or the standings edit the data in `teamData.js`