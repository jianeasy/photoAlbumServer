import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';



@Entity()
class UserEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '用户的自增ID',
    })
    userId: number;

    @Column('varchar', {
        name: 'userName',
        comment: '用户名',
        length: 64,
    })
    userName: string;

    @Column('varchar', {
        name: 'password',
        nullable: false,
        comment: '用户密码',
        length: 64,
    })
    password: string;

    @Column('varchar', {
        name: 'phone',
        nullable: true,
        comment: '手机号',
        length: 20,
    })
    phone: string;

    @Column('varchar', {
        name: 'email',
        nullable: true,
        comment: '邮箱',
        length: 20,
    })
    email: string;
    @Column('varchar', {
        name: 'last_login_time',
        nullable: false,
        comment: '最后登录时间  YYYY-MM-DD HH:MM:SS',

    })
    lastLoginTime: string;
}

export { UserEntity }