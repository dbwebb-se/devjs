devjs
========================

Development environment for js courses showing structure of files and tools to use.

The instructions below is for how to setup a development project like this, from scratch.



ToDo
------------------------

These are possible todos that we want to add to the development environment when going to "2025".

* .editorconfig
* esbuild to `dist/` with minification
* verify how it works with node
* verify that it works with typescript
* add sass/scss compiler for stylesheets
* compress and resize images
* add docker structure for images



Create the package.json
------------------------

Start by creating a `package.json`.

```
npm init --yes
```

Set to use ESM modules.

```
npm pkg set type="module"
```

To simplify, you can run the commands as one.

```
npm init --yes && npm pkg set type="module"
```



Install and run a web server for development
------------------------

It is useful to run a web server when you are developing your code. You can do like this to include a web server in your development environment.

Install the npm package [http-server](https://www.npmjs.com/package/http-server).

```
npm install http-server --save-dev
```

Then add the following script into `package.json`, it starts the webserver at the selected port.

```json
  "scripts": {
    "http-server": "npx http-server -p 9001 "
  },
```

You can now start the web server and it will load the files available in the directory `public/`.

```
npm run http-server
```

You can open your web browser to the url `http://localhost:9001` to view the files available in the `public/` directory.



Install HTML validator htmlhint
------------------------

The tool [htmlhint](https://www.npmjs.com/package/htmlhint) checks and validates your HTML files.

Do this to install htmlhint.

```
npm install htmlhint --save-dev
```

Add the following to the script part of the package.json.

```json
{
    "scripts": {
        "htmlhint": "npx htmlhint ./public || exit 0"
    }
}
```

You can now execute it like this to check all HTML files in the directory public/.

```
npm run htmlhint
```



Install CSS validator stylelint
------------------------

The tool [stylelint](https://www.npmjs.com/package/stylelint) checks your CSS files.

Do this to install stylelint.

```
npm install stylelint stylelint-config-recommended --save-dev
```

You need a configuration file `.stylelintrc.json` with the ruleset to use, start with this one (save it as `stylelintrc.json`).

```json
{
  "ignoreFiles": [
    "**/*.min.css",
    "dist/"
  ],
  "extends": ["stylelint-config-recommended"]
}
```

Add the following to the script part of the package.json.

```json
{
    "scripts": {
        "stylelint": "npx stylelint \"./public/**/*.css\" || exit 0",    
        "stylelint:fix": "npx stylelint --fix \"./public/**/*.css\" || exit 0",
    }
}
```

You can now execute it like this to validate (and fix) all css-files below the public directory.

```
npm run stylelint
npm run stylelint:fix
```



Install JavaScript linter eslint and configure it
------------------------

The tool [eslint](https://www.npmjs.com/package/eslint) checks and fixes your JavaScript files.

Do this to install eslint and to set it up to use a coding standard.

```
npm init @eslint/config
```

During the installation process you are asked a few questions to help configuring and installing the tool.

After the installation is done you may add the following scripts to the script part of the package.json.

```json
{
    "scripts": {
        "eslint": "npx eslint . || exit 0",
        "eslint:fix": "npx eslint . --fix || exit 0"
    }
}
```

You can now execute it like this.

```
npm run lint
npm run lint:fix
```



Enforce JSDoc comments using eslint
------------------------

To enforce JSDoc comments the following is added.

First install the jsdoc-plugin for eslint.

```
npm install --save-dev eslint-plugin-jsdoc
```

Then add the following to the eslint configuration file.

```json
{
  "plugins": [
    "jsdoc"
  ]
}
```

Ensure that the `extends:` also contains this.

```json
{
  "extends": [
    "plugin:jsdoc/recommended"
  ]
}
```

Add the following to the `rules:` section. It extends the recommended rule set.

```json
{
    "rules": {
        "jsdoc/require-jsdoc": [1, {
            "require": {
              "ClassDeclaration": true,
              "MethodDefinition": true
            }
          }],
          "jsdoc/require-description": 1,
          "jsdoc/require-description-complete-sentence": 1
    }
}
```

You can now run eslint. You can even partially fix missing JSDoc comments.

```
npm run eslint
npm run eslint:fix
```


### Example on JSDoc comments

This is how the JSDOC should look like for a function.

```js
/**
 * Calculates the sum of the parameters.
 *
 * @param {number} x - Operand.
 * @param {number} y - Operand.
 * @returns {number} The sum of the operands.
 */
function add(x, y) {
  return x + y
}
```



Run all linters
------------------------

Execute all linters with one command.

This is how the script are defined.

```json
{
    "scripts": {
        "lint": "npm run htmlhint && npm run stylelint && npm run eslint",
    }
}
```

You can run the command like this.

```
npm run lint
```



Generate JSDoc
------------------------

This is how to generate documentation using JSDoc for your project.

Start by installing the tool.

```
npm install --save-dev jsdoc
```

You need a configuration file `.jsdoc.json` with the ruleset to use. You can start by downloading the one used in this project.

```
wget -q https://raw.githubusercontent.com/dbwebb-se/devjs/main/.jsdoc.json
```

Then add the following scripts to your package.json.

```json
{
  "scripts": {
    "jsdoc": "npx jsdoc -c .jsdoc.json || exit 0",
  },
}
```

You can now run the command to generate the documentation.

```
npm run jsdoc
```

The documentation is generated to `build/jsdoc` and you can point your browser to view it.
 
You can read more on "[Configuring JSDoc with a configuration file](https://jsdoc.app/about-configuring-jsdoc.html)" if needed.



Clean up all generated files
------------------------

Remove all generated files with npm run clean.
You can remove all installed and generated files using npm run clean-all.
This is how the scripts are defined. Modify the scripts when needed to clean out all generated files.

```json
{
    "scripts": {
        "clean": "rm -rf build/",
        "clean-all": "npm run clean && rm -rf node_modules/ && rm -f package-lock.json"
    }
}
```

You can now run the commands like this.

```
npm run clean
npm run clean-all
```

If you clean all generated files, then you need to install them again using `npm install`.

