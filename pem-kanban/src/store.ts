import { createSignal } from 'solid-js';

export const projects = ['abs-docu', 'hrs-corporate', 'phantasialand'];

export const [selectedProject, setSelectedProject] = createSignal(projects[0]);
