import { Controller, Get } from '@midwayjs/decorator';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entity/user.entity'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'photo_album.sqlite',
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
