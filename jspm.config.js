SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "bootstrap": "npm:bootstrap@4.0.0-alpha.2",
    "jquery": "npm:jquery@2.2.4"
  },
  packages: {
    "npm:bootstrap@4.0.0-alpha.2": {
      "map": {
        "jquery": "npm:jquery@2.2.4"
      }
    }
  }
});
