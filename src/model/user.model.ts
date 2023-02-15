import { UserEntity } from '../entity/user.entity';
// import { dbConnection } from '../controller';
// import { Repository, EntityManager } from 'typeorm';
import { dataSource } from '../controller/home.controller';
import { addUserDto, getUserDto,  } from '../dto/user.dto';

class UserModel {

  /**
   * 根据用户名获取用户密码
   * @param {String} userName 用户名
   */
  async getUserByUsername(userName: string): Promise<getUserDto> {
    return await dataSource.getRepository(UserEntity).findOneBy({
      userName,
    });
  }
 
  /**
   * 获取用户列表
   */
  async getUserlist(): Promise<UserEntity[]> {
    return await dataSource.getRepository(UserEntity).find();
  }

  /**
    * 获取用户信息
  */
  async getUserById(userId: number): Promise<any> {
    return await dataSource.getRepository(UserEntity).findOneBy({
      userId,
    });
  }

  /**
  * 新增用户
  */
  async addUser(data: addUserDto): Promise<addUserDto> {
    
    return dataSource.getRepository(UserEntity).create(data);
  }
}

export default UserModel;
