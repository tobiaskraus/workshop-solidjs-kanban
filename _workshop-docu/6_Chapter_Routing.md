[README](../README.md)

[< prev](5_Chapter_Components.md)

## Routing

Install the router library

```sh
npm i solid-app-router
```

See README of library how to implement routing: https://github.com/solidjs/solid-app-router

-   index.tsx: wrap `<Router>` around `<App>`
-   let's create 3 routes in `App.tsx`:

```tsx
const Project = lazy(() => import('./components/Project/Project'));

// ...

<Routes>
    <Route path="/projects/:id" element={<Project />} />
    <Route path="/" element={<div>Projekte</div>} />
    <Route path="/*all" element={<div>Not Found</div>} />
</Routes>;
```

-   let's create a new component `Project`:

```diff
src/
    components/
        Header/
+       Project/
+           Project.tsx
+           Project.module.css
        Sidebar/
```

-   let's change in `Sidebar.tsx`:
    -   isntead of the `<a>` tag: we write:

```tsx
<NavLink
    class={styles.link}
    onclick={() => store.setSelectedProject(project)}
    activeClass={styles.active}
    href={`/projects/${project}`}
>
    # {project}
</NavLink>
```

-   and we have to adjust the `Sidebar.module.css`:
    -   Instead of `Sidebar > a.selected` we write: `“.link.active `

### Jump to solution

> `git checkout chapter-routing`

[next >](7_Chapter_Data.md)
