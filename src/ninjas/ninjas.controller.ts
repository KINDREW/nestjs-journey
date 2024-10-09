import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateNinjasDto } from './dto/create-ninjas.dto';
import { UpdateNinjasDto } from './dto/update-ninjas.dto';

@Controller('ninjas')
export class NinjasController {
  //Get: Fetch Ninjas
  @Get()
  getNinja() {
    return [];
  }
  //Get: Fetch  oneNinja
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
  //POST:Create Ninja
  @Post()
  createNinja(@Body() createNinjasDto:CreateNinjasDto) {
    return {
      name: createNinjasDto.name,
    };
  }
  //PUT: Update Ninja
  @Put(':id')
  updateNinja(
    @Param('id') id: string,
    @Body() updateNinjasDto: UpdateNinjasDto,
  ) {
    return {
      id,
      name: updateNinjasDto,
    };
  }

  //DELETE: Delete Ninja
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
}

/* controllers are responsible for handling incoming requests and returning responses to the user
Controllers are used to define the behavior of routes in the application
Controllers are classes decorated with the @Controller() decorator
@Get(): This decorator maps the method to handle GET requests. 
You can also pass a path to this decorator, ie. @Get(':id') to handle dynamic routes (like /ninjas/:id)
@Param(): This decorator extracts parameters from the  request url
@Query(): This decorator extracts queries from the  request url
@Post(): This decorator maps the method to handle  POST requests.
@Body(): This decorator extracts data from the body of a request
@Put: This decorator maps the method to handle PUT requests(ie updating)
@Delete: This decorator maps the method to handle DELETE requests

*/
