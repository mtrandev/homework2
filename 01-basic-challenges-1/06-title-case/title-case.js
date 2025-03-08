function titleCase(str) {
return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }
  
  module.exports = titleCase;