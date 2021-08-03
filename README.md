# 2. Quick Start

1. Install needed dependencies

   ```bash
   npm install
   ```

2. Run webpack

   ```bash
   npm run dev
   ```
   
   The dev command will start Webpack and tell it to watch for changes in JS and SCSS files, to recompile the needed assets.  
   
   If you want to compile all assets for production usage, run the following command.

   ```bash
   npm run build
   ```

   This command tells webpack to run in production mode and compiles all of the assets in a minified version, to deliver smaller files for your users.