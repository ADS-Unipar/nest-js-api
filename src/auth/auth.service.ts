import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { SingInDto } from './dto/sing-in.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async singIn(dto: SingInDto): Promise<{ access_token: string; user: User }> {
    const user = await this.usersService.findOneByEmail(dto.email);
    const passwordMatch = this.validatePassword(dto.password, user.password);
    console.log(passwordMatch);
    if (!passwordMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      access_token,
      user,
    };
  }

  private async validatePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
