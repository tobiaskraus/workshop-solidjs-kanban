import { Project } from '../models/project';

export const projects: Project[] = [
    {
        id: 1,
        slug: 'abs-docu',
        columns: ['to do', 'in progress', 'done'],
    },
    {
        id: 2,
        slug: 'hrs-corporate',
        columns: ['to do', 'in progress', 'ready for test', 'ready for staging', 'done'],
    },
    {
        id: 3,
        slug: 'phantasialand',
        columns: ['to do', 'in progress', 'ready for test', 'ready for staging', 'ready for prod'],
    },
];
