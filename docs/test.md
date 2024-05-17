# test

## h2 test

### h3 test

```ts
export default defineConfig({
    title: '14bytes技术部',
    titleTemplate: ':title|14bytes',
    description: 'Technical Teams Documents',
    lang: 'zh-CN',

    // 请求头
    head: [
    [
    'meta',
    {
        'http-equiv': 'cache-control',
        content: 'no-cache,no-store, must-revalidate',
    },
    ],
    ['meta', { 'http-equiv': 'pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'Expires', content: '0' }],
    ],
}
```

#### h4 test {#TEST}

```ts{2}
export default defineConfig({
    title: '14bytes技术部',
    titleTemplate: ':title|14bytes',
    description: 'Technical Teams Documents',
    lang: 'zh-CN',

    // 请求头
    head: [
    [
    'meta',
    {
        'http-equiv': 'cache-control',
        content: 'no-cache,no-store, must-revalidate',
    },
    ],
    ['meta', { 'http-equiv': 'pragma', content: 'no-cache' }],  //[!code --]
    ['meta', { 'http-equiv': 'Expires', content: '0' }],    //[!code ++]
    ],
}
```

```js
export default {
    data () {
        return {
            msg: 'Focused!'     //[!code focus]
        }
    }
}
```

::: tip
this is tip
:::

::: warning
this is warning
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />
### Title <Badge type="info">custom element</Badge>
