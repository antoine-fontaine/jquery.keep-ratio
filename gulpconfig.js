/*jshint node:true */
'use strict';

var config = {};

// Configurable paths
// Don't use leading or trailing slashes!
config.path = {
    src: 'src',
    test: 'test'
};

// Plugins preferences
config.plugins = {
    // Bumps the version number (and create a git commit and tag)
    bump: {
        packageFiles: [ 'package.json', 'bower.json' ],
    }
};

module.exports = config;
