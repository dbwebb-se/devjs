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



Install eslint and configure it
------------------------

_How to do it the simplest way?_

