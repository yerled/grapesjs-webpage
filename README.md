# GrapesJS Preset Webpage



## Summary

* Plugin name: `gjs-preset-webpage`
* Includes
  * `grapesjs-blocks-basic` Basic set of blocks
  * `grapesjs-navbar` Simple navbar component
  * `grapesjs-component-countdown` Simple countdown component
  * `grapesjs-plugin-forms` Set of form components and blocks
* Commands
  * `gjs-open-import-webpage` Opens a modal for the import
* Components: `new-component1`, `new-component2`, ...
* Blocks: `new-block1`, `new-block1`, ...





## Options

* `option1` Description option, default: `default value`





## Download

* `npm i grapesjs-preset-webpage`





## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-preset-webpage.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['grapesjs-preset-webpage'],
      pluginsOpts: {
        'grapesjs-preset-webpage': {
          // options
        }
      }
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-preset-webpage.git
$ cd grapesjs-preset-webpage
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause