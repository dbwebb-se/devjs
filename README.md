devjs
========================

Development environment for js courses showing structure of files and tools to use.

The instructions below is for how to setup a development project like this, from scratch.



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
npm install stylelint --save-dev
```

Add the following to the script part of the package.json.

```json
{
    "scripts": {
        "stylelint": "npx stylelint \"./public/**/*.css\" || exit 0"
    }
}
```

You need a configuration file `.stylelintrc.json` with the ruleset to use. You can start by downloading the one used in this project.

```
wget -q https://raw.githubusercontent.com/dbwebb-se/devjs/main/.stylelintrc.json
```

You can now execute it like this to validate (and fix) all css-files below the public directory.

```
npm run stylelint
npm run stylelint:fix
```



Install eslint and configure it
------------------------

_How to do it the simplest way?_

