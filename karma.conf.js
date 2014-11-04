/**
 * Created by Beven Lee on 4/11/2014.
 */

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/*.js',
            'test/spec/*.js'
        ],
        browsers: ['PhantomJS'],
        singleRun: true,
        reporters: ['progress', 'coverage'],
        preprocessors: { '*.js': ['coverage'] }

    });
};