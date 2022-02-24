import { Ticket } from '../models/ticket';
import { faker } from '@faker-js/faker';
import { users } from './users';
import { projects } from './projects';

export const tickets: Ticket[] = [];

const amountTickets = 30;
for (let i = 0; i < amountTickets; i++) {
    const project = faker.random.arrayElement(projects);
    tickets.push({
        id: i,
        title: faker.company.catchPhrase(),
        description: faker.hacker.phrase(),
        project,
        assignee: faker.random.arrayElement(users),
        column: faker.random.arrayElement(project.columns),
    });
}
