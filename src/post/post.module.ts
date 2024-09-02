import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { AuthService } from 'src/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, User]),],
  controllers: [PostController],
  providers: [PostService, AuthService, UserService],
})
export class PostModule {}
