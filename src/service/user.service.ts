import { Provide, Inject } from '@midwayjs/decorator';
// import { IUserOptions } from '../interface';
import UserModal from '../model/user.model';
import { addUserDto, getUserDto } from '../dto/user.dto'
@Provide()
export class UserService {
  @Inject()
  user: UserModal;
  async getUser(data: getUserDto) {
    const { userId } = data
    this.user.getUserById(userId)
    return {
      //  uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
  async addUser(userData: addUserDto) {
    this.user.addUser(userData)
  }
}
