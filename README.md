# Ivory Pay Registration

# Computer Database

## Summary

A test suite for the Ivory Registration Page application that is written with cypress and utilizes the page object model design pattern.

## Requirements

The test suite focuses majorly on the following modules of the application:

- Registration Page

## Frameworks and Technologies

The test suite is written in `Javascript` and uses `Cypress` as the test framework. The page object model design pattern was used in this project to reduce duplication of code and to improve the overall maintainability of the test suite. Other technologies involved are:

- Nodejs
- Mocha

### Prerequisites

To run this test suite, you must have Node.js (v12 or higher) and npm (6.4.1 or higher) installed on your local machine. Run `node -v` and `npm -v` in your terminal to confirm that you have them installed. You would also require a command line tool. 

### Initialization Steps

To get the test suite up and running on a local environment, do the following:

- clone the repository with the following command:
```bash
# get test suite
$ git clone https://github.com/Olatunde093/IVORY-PAY-REGISTRATION-PAGE.git
```
- Open the folder of the cloned repository
- Change directory in your command line tool to the root directory of the test suite
```bash
# Change into test suite directory
$ cd IVORY-PAY-REGISTRATION
```
- Install the dependencies of the test suite
```bash
# Install dependencies
$ npm install
```
- Run the test suite
```bash
# Run test suite
$ npm test
