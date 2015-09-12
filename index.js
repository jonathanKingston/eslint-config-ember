var assign = require('object-assign');
var config = require('eslint-config-nightmare-mode/browser');
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
    ],
    "one-var": [2,
      {
        "uninitialized": "always",
        "initialized": "never"
      }
    ],
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "no-invalid-this": 0,
    "prefer-template": 0,
    "no-underscore-dangle": 0
  }
};

assign(config.rules, overrides.rules);

module.exports = config;
