import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,

  OneToMany,

  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Post } from 'src/post/entities/post.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
    
  @OneToMany(() => Post, (Post) => Post.user)
  posts: Post[]

  
  @BeforeInsert()
  @BeforeUpdate()
  hasPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }


}
