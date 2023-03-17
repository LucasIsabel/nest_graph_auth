import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'user 1',
      password: '123',
    },
    {
      id: 2,
      username: 'user 2',
      password: '123',
    },
  ];

  create(createUserInput: CreateUserInput): User {
    this.users.push({
      ...createUserInput,
      id: this.users.length + 1,
    });
    return createUserInput;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(username: string): User {
    const user = this.users.find((user) => user.username === username);
    return user;
  }
}
