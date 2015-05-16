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
    ]
  }
};

assign(config.rules, overrides.rules);

module.exports = config;
