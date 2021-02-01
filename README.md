# Unit Testing Pulumi programs in TypeScript with Wallaby

An example of writing mock-based unit tests with both infrastructure definition and tests written in TypeScript. The example uses the [Mocha](https://mochajs.org/) test framework to define and run the tests. Example originally from [here](https://github.com/pulumi/examples/tree/74db62a03d013c2854d2cf933c074ea0a3bbf69d/testing-unit-ts).

## Prerequisites

1. [Ensure you have the latest Node.js and NPM](https://nodejs.org/en/download/).
2. [Install the Mocha test framework](https://mochajs.org/#installation).

## Running the tests

1.  Restore NPM dependencies:

    ```
    $ npm install
    ```

2.  Start Wallaby, making sure to select the configuration file. Refer to [Wallaby docs](https://wallabyjs.com/docs/intro/config.html#configuration-file) for more information on starting Wallaby.