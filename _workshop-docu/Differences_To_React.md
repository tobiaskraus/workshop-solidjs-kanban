# Differences to React

## style attribute has kebab case

SolidJS:

```html
<div style={{
  color: `rgb(${num()}, 180, ${num()})`,
  "font-weight": 800,
  "font-size": `${num()}px`}}
>
```

vs React:

```html
<div style={{
  color: `rgb(${num()}, 180, ${num()})`,
  fontWeight: 800,
  fontSize: `${num()}px`}}
>
```

This means that we have the ability to set CSS variables:

```html
<div style={{ "--my-custom-color": themeColor() }} />
```

## refs are actual DOM elements

SolidJS:

```tsx
let myDiv;

<div ref={myDiv}></div>
```

vs React:

```tsx
const myDiv = useRef<HTMLDivElement>(null);

<div ref={myDiv}></div>
```

Nice thing: you don't have to wait for it to become initialized. You can do this:

```tsx
<div ref={myDiv => doSomething(myDiv)}></div>
```

more infos: https://www.solidjs.com/tutorial/bindings_refs

## forwarding refs are so easy

SolidJS:

You can just assign a prop to a Component's element. The parent can then access it via the ref prop:

```jsx
const Child = (props) => (
    <div ref={props.ref} />
)

// parent component
let child;
<Child ref={child} />
```

more infos: https://www.solidjs.com/tutorial/bindings_forward_refs


vs React:

```jsx
const Child = React.forwardRef((props, ref) => (
    <div ref={props.ref} />
));

// parent component
let child;
<Child ref={child} />
```

But with TypeScript and generics I ended up in React:

```tsx
const ListSortable = <T extends unknown>(props: ListSortableProps<T>, ref: Ref<ListSortableRef>): JSX.Element => {
    const [columns, setColumns] = useState<Column<T>[]>(props.columns);
    // ....
}

// We cast the component here, because forwardRef doesn't allow generic components
// Solution of casting founde here: https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref/58473012

export default forwardRef(ListSortable) as <T extends unknown>(
    props: ListSortableProps<T> & { ref?: Ref<ListSortableRef> }
) => ReactElement;
```

## Custom Directives

SolidJS:

```ts
import { onCleanup } from "solid-js";

export default function clickOutside(el, accessor) {
 const onClick = (e) => !el.contains(e.target) && accessor()?.();
  document.body.addEventListener("click", onClick);

  onCleanup(() => document.body.removeEventListener("click", onClick));
}
```

```html
<div class="modal" use:clickOutside={() => setShow(false)}>
  Some Modal
</div>
```

more infos: https://www.solidjs.com/tutorial/bindings_directives

vs React:

🤷‍♂️ has nothing like that I think.

## Watch out with props spreading

SolidJS:

spreading the props can lose the reactivity.

That's why there are some helper functions:

- `mergeProps`: https://www.solidjs.com/tutorial/props_defaults
- `splitProps`: https://www.solidjs.com/tutorial/props_split

## Advanced: Manipulating children

https://www.solidjs.com/tutorial/props_children