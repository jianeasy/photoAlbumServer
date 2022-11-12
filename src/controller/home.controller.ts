import { Controller, Get } from '@midwayjs/decorator';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entity/user.entity'

export const dataSource = new DataSource({
  type: 'mysql',
  database: 'photo_album',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'jyylhpllfr',
  entities: [UserEntity],
  logging: true,
  synchronize: true,
})
const initDataBase = async () => {
  try {
    await dataSource.initialize()
    console.log('data base has been initialized')
  } catch (error) {
    console.log(error);
  }
}

initDataBase()

@Controller('/')
export class HomeController {

  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
