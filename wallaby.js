module.exports = function (wallaby) {
  return {
    files: [
      '**/*.js', 
      { pattern: '**/*.yaml', instrument: false }, 
      '!**/*tests.js', 
      '!node_modules/**/*.*'
    ],

    tests: [
      '**/*tests.js',
      '!node_modules/**/*.*'
    ],

    env: {
      type: 'node',
    },
  };
};
