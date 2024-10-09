import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjasDto {
  @MinLength(3)
  name: string;

  @IsEnum(['stars', 'nunchunks'])
  weapon: 'stars' | 'nunchunks';
}
