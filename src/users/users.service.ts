import { Injectable } from '@nestjs/common';

export type User = any

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'John',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'Jane',
            password: 'guess',
        },
    ]

    findOne(username: string): User | undefined {
        return this.users.find(user => user.username === username)
    }
}
