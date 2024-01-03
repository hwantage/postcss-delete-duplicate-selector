**[PostCSS](https://github.com/postcss/postcss)** plugin for delete duplicate css selector in the file.

This plugin deletes duplicate css selectors. It removes the duplicate selector at the bottom, leaving the top one.

**input.css:**

```css
.hello {
  width: 100%;
}

h1, h2 {
  color: red;
}

.hello {
  padding-left: 10px;
}

h1, h2 {
  color: blue;
}

.other {
	display: none;
}
```

**output.css:**

```css
.hello {
  width: 100%;
}

h1, h2 {
  color: red;
}

.other {
	display: none;
}
```

## **Installation**

`$ npm i -D postcss postcss-cli`

`$ npm i -D postcss-delete-duplicate-selector`

## **Usage 1**

**package.json:**

```jsx
{
	"scripts": {
		"build": "postcss input.css --use postcss-delete-duplicate-selector --output output.css"
	},
	"devDependencies": {
		"postcss": "^8.4.32",
		"postcss-cli": "^11.0.0",
		"postcss-delete-duplicate-selector": "^1.0.0"
	}
}
```

and then `npm run build`

## **Usage 2**

Or you can use `postcss.config.js` file. Create a `postcss.config.js` file in your root directory.

**postcss.config.js:**

```
module.exports = {
  plugins: [
    require('postcss-delete-duplicate-css')
  ],
};
```

Change the build script to look like this

**package.json:**

```jsx
{
	"scripts": {
		"build": "postcss input.css --output output.css"
	},
	"devDependencies": {
		"postcss": "^8.4.32",
		"postcss-cli": "^11.0.0",
		"postcss-delete-duplicate-selector": "^1.0.0"
	}
}
```

and then `npm run build`

See **[PostCSS](https://github.com/postcss/postcss)** docs for **[examples regarding usage](https://github.com/postcss/postcss#usage)**.

## **Options**

N/A

### Additional Info

This plugin will delete all comments.

**input.css:**

```css
/*This is the comment1*/
.hello {
  width: 100%;
}
/*This is the comment2*/
```

**output.css:**

```css
.hello {
  width: 100%;
}
```

This plugin does not consider whitespace between selectors.

**input.css:**

```css
h1, h2 {
  width: 100%;
}

h1,h2 {
  width: 100%;
}
```

**output.css:**

```css
h1, h2 {
  width: 100%;
}

h1,h2 {
  width: 100%;
}
```

## **License**

MIT
