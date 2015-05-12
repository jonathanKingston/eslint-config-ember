var assign = require('object-assign');
var config = require('eslint-config-nightmare-mode');
// Ember specific overrides
var overrides = {
 "rules": {
   "new-cap": [0,
      {
        "capIsNewExceptions": [
            "Array",
            "Boolean",
            "Date",
            "Error",
            "Function",
            "Number",
            "Object",
            "RegExp",
            "String",
            "Symbol",
  
            "Ember",
            "A"
        ]
      }
    ]
  }
};

assign(config.rules, overrides.rules);

module.exports = config;
