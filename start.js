var libs = require('require-all')({
    dirname     :  __dirname,
    filter      :  /(en)\.json$/,
    excludeDirs :  /^\.(git|svn)$/,
    recursive   : true
  });

console.log(JSON.stringify(libs))
