import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjasDto } from './create-ninjas.dto';

export class UpdateNinjasDto extends PartialType(CreateNinjasDto) {}
