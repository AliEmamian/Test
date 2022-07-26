import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/User.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  async create(payload: CreateUserDto) {
    const user: User = new User();

    user.name = payload.name;
    user.nationalCode = payload.nationalCode;
    user.age = payload.age;
    user.address = payload.address;

    await this.repository.save(user);

    return { id: user.id, error: null, status: HttpStatus.OK };
  }

  async findAll() {
    const user: User[] = await this.repository.find();

    if (!user) {
      return {
        data: null,
        error: ['User not found'],
        status: HttpStatus.NOT_FOUND,
      };
    }

    return { data: user, error: null, status: HttpStatus.OK };
  }

  async findOne(id: number) {
    const user: User = await this.repository.findOne({ where: { id: id } });

    if (!user) {
      return {
        data: null,
        error: ['User not found'],
        status: HttpStatus.NOT_FOUND,
      };
    }

    return { data: user, error: null, status: HttpStatus.OK };
  }

  async update(id: number, payload: UpdateUserDto) {
    const user: User = await this.repository.findOne({ where: { id: id } });
    if (user) {
      user.name = payload.name;
      user.age = payload.age;
      user.nationalCode = payload.nationalCode;
      user.address = payload.address;

      await this.repository.save(user);

      return { data: user, error: null, status: HttpStatus.OK };

    }
    return { data: null, error: ['User not found'], status: HttpStatus.NOT_FOUND };
  }

  async remove(id: number) {
    const user: User = await this.repository.findOne({ where: { id: id } });
    await this.repository.delete({ id: id });
    if (!user) {
      return { id: id, error: ['User not found'], status: HttpStatus.NOT_FOUND };
    }

    return { id: id, error: null, status: HttpStatus.OK };  }
}
