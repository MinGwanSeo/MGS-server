import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm'

@Entity()
@Expose()
export class ScreenShot {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number

  @Column()
  @ApiProperty()
  image: string

  @Column()
  @ApiProperty()
  time: Date

  constructor(partial?: Partial<ScreenShot>) {
    return Object.assign(this, partial)
  }
}
