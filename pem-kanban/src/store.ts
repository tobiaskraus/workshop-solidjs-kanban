import { createEffect, createResource, createSignal } from 'solid-js';

export const [projects] = createResource<string[]>(
    () => fetch('/src/data/projects.json').then((res) => res.json()),
    {
        initialValue: [],
    }
);

createEffect(() => {
    setSelectedProject(projects()[0]);
});

export const [selectedProject, setSelectedProject] = createSignal(projects()[0]);
