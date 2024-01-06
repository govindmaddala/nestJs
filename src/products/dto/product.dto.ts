/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {

  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  productname: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

}