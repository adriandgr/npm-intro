## Exercise
In this exercise we are going to install a package called `chalk` and use it in a simple Node script.

Once in your working directory, execute the following command:
```
npm init
```
(`npm init` creates your package.json, which you'll be able to edit later. Fill out the fields as desired -- but, don't call your project `chalk`)

Next we install the package `chalk`,
```
npm install --save chalk
```
Then check the contents of your working directory by running `ls -l` - You should see a new subdirectory called `node_modules/`. This subdirectory contains each installed package. Confirm this by exploring `ls -l node_modules/`.

This enables us to import any installed packages, like `chalk`, into our JavaScript files within our working directory.

Create a new file called `index.js`,

```javascript
var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);
```
Modify `index.js` to explore the functions of Chalk. Try chaining commands together to combine various styles.

Take a look through the source code on GitHub [https://github.com/chalk/chalk](https://github.com/chalk/chalk), including the project's `package.json`.