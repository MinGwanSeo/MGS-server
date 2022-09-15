import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm'

@Entity({ name: 'screenshot' })
@Expose()
export class ScreenShot {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number

  @Column()
  @ApiProperty()
  vid: string

  @Column()
  @ApiProperty()
  image: string

  @Column()
  @ApiProperty()
  vTime: number

  constructor(partial?: Partial<ScreenShot>) {
    return Object.assign(this, partial)
  }
}
