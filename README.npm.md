<p align="center">
  <img src="logo.svg" alt="vue-try-on-before-unmount" width="180" />
</p>

<h1 align="center">vue-try-on-before-unmount</h1>

<p align="center"></p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-try-on-before-unmount"><img src="https://img.shields.io/npm/v/vue-try-on-before-unmount.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-try-on-before-unmount"><img src="https://img.shields.io/npm/dm/vue-try-on-before-unmount.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-try-on-before-unmount
```

## Usage

Safe `onBeforeUnmount`. Call `onBeforeUnmount()` if it's inside a component lifecycle, if not, do nothing

```ts
import { tryOnBeforeUnmount } from 'vue-try-on-before-unmount'

tryOnBeforeUnmount(() => {

})
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
