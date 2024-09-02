import { IsString, MaxLength } from "class-validator";

export class CreatePostDto {
    @IsString({ message: 'Título deve ser uma string' })
    @MaxLength(120, {message: "Título dever ter no máximo 120 caractres"})
    title: string;

    @IsString({ message: 'Título deve ser uma string' })
    @MaxLength(1200, {message: "Título dever ter no máximo 120 caractres"})
    text: string;



}
