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

`$ npm i -D postcss`

`$ npm i -D postcss-delete-duplicate-selector`

## **Usage**

**postcss.config.js:**

```jsx
module.exports = {
  plugins: [
    require('postcss-delete-duplicate-css')
  ],
};
```

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
