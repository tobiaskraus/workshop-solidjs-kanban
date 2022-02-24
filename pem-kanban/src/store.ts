import { createEffect, createResource, createSignal } from 'solid-js';
import { Project } from './models/project';
import { Ticket } from './models/ticket';
import { User } from './models/user';

export const [projects] = createResource<Project[]>(
    () => import('./data/projects').then((res) => res.projects),
    {
        initialValue: [],
    }
);
export const [users] = createResource<User[]>(
    () => import('./data/users').then((res) => res.users),
    {
        initialValue: [],
    }
);
export const [tickets] = createResource<Ticket[]>(
    () => import('./data/tickets').then((res) => res.tickets),
    {
        initialValue: [],
    }
);

createEffect(() => {
    setSelectedProject(projects()[0]);
});

export const [selectedProject, setSelectedProject] = createSignal(projects()[0]);
