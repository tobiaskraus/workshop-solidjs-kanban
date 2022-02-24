[README](../README.md)

[< prev](2_Start.md)

## States

Let's have a look in App.tsx. The only component in our Application so far.

We replace everything inside `<header>...</header>` with:

```html
<h2>1</h2>
<button>click me</button>
```

**Task**:

-   whenever the user clicks, the number should increase

### Side Effects

**Task**:

-   whenever the state is updated we want to send the current count to the API. We fake the code by: `console.log('send current count to API:', count())`
-   best way would be to put the code inside the onClick function, but let's assume we need to do it via side effect for whatever reason

### Computed / Derived Signals

-   a derived signal is just a function using another signal and returning a value

**Task**:

-   create a derived signal `doubleCount` and show with it the double of the `count` signal

### More stuff

If you're interested in more:

-   [Tutorial: createMemo](https://www.solidjs.com/tutorial/introduction_memos)
-   [Tutorial: \<Show when={} fallback={}>](https://www.solidjs.com/tutorial/introduction_memos)

### Jump to solution

> `git checkout chapter-states`

[next >](4_Chapter_Layout.md)
