import { IsEmail, IsString, MinLength } from 'class-validator';

export class SingInDto {
  @IsEmail({ require_tld: true }, { message: 'Email inválido' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  password: string;
}
