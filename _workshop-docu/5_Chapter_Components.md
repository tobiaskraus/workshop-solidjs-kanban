[README](../README.md)

[< prev](4_Chapter_Layout.md)

## Components and Store

Let's move some stuff into own components:

folder:

```diff
src/
+   components/
+       Header/
+           Header.tsx
+           Header.module.css
+       Sidebar/
+           Sidebar.tsx
+           Sidebar.module.css
    App.tsx
```

In VSCode you can use the snippet of this project to create the boilerplate:

-   `compfile` + TAB
-   or: `compfile-with-props` + TAB

**Task**:

-   let's pass all the required states as props to the new Components (Controlled Components).
    -   which props do we need to define?

### Store vs pop drilling

Instead of storing all states in the App component, and passing to the children, we can outsource the states (signals).

-   create `src/store.ts`
-   cut & paste all data into it and `export` them:

```ts
import { createSignal } from 'solid-js';

export const projects = ['abs-docu', 'hrs-corporate', 'phantasialand'];

export const [selectedProject, setSelectedProject] = createSignal(projects[0]);
```

Now let's use them directly inside `Sidebar` & `Header` (no more props needed)

### fetch data instead of in-code consts

-   We use [createResource](https://www.solidjs.com/docs/latest/api#createresource) to fetch the `projects`
-   save the projects array in a file `src/data/projects.json`

write:

```ts
const [projects] = createResource<string[]>(
    () => fetch('src/data/projects.json').then((res) => res.json()),
    {
        initialValue: [],
    }
);
```

-   `projects` is now a resource and needs to get accessed by `projects()`
-   as projects are loaded async now, we need to set the initial `selectedProject`, as soon as projects load / change.
    We can use `createEffect for this`

### More ways of stores

-   SolidJS provide more ways of creating stores, but we have only two states so far: `projects` and `selectedProject`. Maybe we can use those other methods later

1. [createStore](https://www.solidjs.com/docs/latest/api#createstore)
2. [createMutable](https://www.solidjs.com/docs/latest/api#createmutable) -> not recommended

Handy utility:[produce (like Immer)](https://www.solidjs.com/docs/latest/api#produce)

### Jump to solution

> `git checkout chapter-components`

[next >](6_Chapter_Routing.md)
