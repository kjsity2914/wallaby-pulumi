module.exports = function (wallaby) {
  return {
    files: [
      '**/*.ts', 
      { pattern: '**/*.yaml', instrument: false }, 
      '!**/*tests.ts', 
      '!node_modules/**/*.*'
    ],

    tests: [
      '**/*tests.ts'
    ],

    env: {
      type: 'node',
    },

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript(),
    },
  };
};
