import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
class PhotoEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'photoId',
        comment: '照片的自增ID',
    })
    photoId: number;

    @Column('varchar', {
        name: 'photoName',
        nullable: false,
        comment: 'photo title',
        length: 100,
    })
    photoName: string;

    @Column('varchar', {
        name: 'take_time',
        nullable: false,
        comment: '拍摄时间  YYYY-MM-DD HH:MM:SS',

    })

    takeTime: string;
    @Column('varchar', {
        name: 'tag',
        nullable: false,
        comment: '标签 xxx,aaa',

    })
    tag: string;
}

export { PhotoEntity } 