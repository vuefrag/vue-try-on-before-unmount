<p align="center">
  <img src="banner.svg" alt="vue-try-on-before-unmount" width="100%" />
</p>

<h1 align="center">vue-try-on-before-unmount</h1>

<p align="center">A Vue 3 composition API utility that safely calls onBeforeUnmount when inside component setup context, and gracefully handles calls outside setup without errors.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-try-on-before-unmount"><img src="https://img.shields.io/npm/v/vue-try-on-before-unmount.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-try-on-before-unmount"><img src="https://img.shields.io/npm/dm/vue-try-on-before-unmount.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-try-on-before-unmount
```

## Usage

```ts
import { tryOnBeforeUnmount } from 'vue-try-on-before-unmount'

tryOnBeforeUnmount(() => {
  console.log('Component is about to unmount')
})

console.log('Cleanup registered')
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
