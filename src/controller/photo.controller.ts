
import { Inject, Provide, Controller, Post, Get, Body } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { loginDto } from '../dto/user.dto'
import UserModel from '../model/user.model';

@Provide()
@Controller('/api/photo')
export class PhotoController {
    @Inject()
    ctx: Context

    user = new UserModel()

    @Get('/')
    @Post('/')
    login(@Body() params: loginDto) {
        //  const { userName, password } = params
        // todo 通过md5生成token
        //  this.user.
        return {
            success: true,
            token: 123125,
            code: 200,
            data: {}
        }
    }
}