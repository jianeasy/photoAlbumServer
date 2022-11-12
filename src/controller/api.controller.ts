import { Inject, Controller, Get, Param, Post, Body } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserEntity } from '../entity/user.entity'
import { UserService } from '../service/user.service';
import UserModel from '../model/use.modal'

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;


  @Inject()
  UserModel: UserModel;
  @Get('/user')
  async getUser(@Param('uid') uid: string) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }
  @Post('/user')
  async addUser(@Body() params: UserEntity) {
    try {
      await this.UserModel.addUser(params)
      return { success: true, message: '新增用户成功', data: {} }
    } catch (error) {
      return { success: false, message: '新增用户失败', data: {} }
    }
  }
}
