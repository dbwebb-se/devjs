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

It is useful to run a web server when you are developing your code. You can do like this to include it in your development environment.

Install the npm package [http-server](https://www.npmjs.com/package/http-server).

```
npm install http-server --save-dev
```

Then add the following script into `package.json`, it starts the webserver at the selected port.

```
  "scripts": {
    "http-server": "npx http-server -p 9001 "
  },
```

You can now start the web server and it will load the files available in the directory `public/`.

```
npm run http-server
```

You can open your web browser to the url `http://localhost:9001` to view the files available in the `public/` directory.



Install eslint and configure it
------------------------

_How to do it the simplest way?_

