# log-tablr
A React-based web application for displaying processed
[GOAL](https://bitbucket.org/goalhub/) logs.

This application is designed for the data format used by
[GOALLogAnalyser](https://github.com/CptWesley/GOALLogAnalyser) (made by
[@CptWesley](https://github.com/CptWesley)).

## Current features
- Parsing processed log files
- Displaying cumulative data for every agent type
- Displaying cumulative data for a single agent type
- Displaying instance data for every agent of a specific agent type
- Displaying instance data for a single agent of a specific agent type

## Usage
1. Install [NodeJS](https://nodejs.org/), and make sure _npm_ is selected for
installation
2. Clone this repository
3. Open a terminal in the cloned directory
4. Execute <kbd>npm install</kbd> to install dependencies
5. Execute <kbd>npm run build:prod</kbd> to build a production version of the
application
6. In _dist/index.html_, replace `[]` in the `script` tag with id `data-container`
with the JSON output of _GOALLogAnalyser_
7. Open dist/index.html in a modern web browser

For development purposes, use <kbd>npm run dev</kbd> to start
[webpack-dev-server](https://github.com/webpack/webpack-dev-server). To build a
development/non-production version of the application, use <kbd>npm run build</kbd>.

## Contributing
Contributions are definitely welcome. If you'd like to see a new feature, create a pull request or an issue.
