// Naming 'webpack.config.js' is important

module.exports = {
  // import
  entry: './app/app.jsx',
  // export
  output: {
    path: __dirname, // '__dirname' means current directory
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    // specify where to find those file
    // so that not explicitly specify the path in 'require' statement
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx'] //list of file extension that able to process
  },
  module: {
    // purpose of loader is to convert certain file to browser readable
    loaders: [
      {
        loader: 'babel-loader', // covert jsx to es5
        // telling loader what to do with the file
        query: {
          // babel by default require preset
          // to compile the code from react, es2015
          // stage-0 contain all the plugin of es2015
          presets: ['react', 'es2015', 'stage-0']
        },
        // specify which file to apply this loader
        test: /\.jsx?$/, //regular expression, means .jsx file
        // specify which file to be excluded
        exlude: /(node_modules|bower_components)/
      }
    ]
  },
  // Showing original source code in debugger
  devtool: 'eval-source-map'
};

// At terminal, run 'webpack'
// At terminal, run 'webpack -w' will listen to the changes continuously
// and restart webpack automatically
