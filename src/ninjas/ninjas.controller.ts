import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjasDto } from './dto/create-ninjas.dto';
import { UpdateNinjasDto } from './dto/update-ninjas.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {} //injecting the services into the controller so you'll not need to call the service class everytime

  //Get: Fetch Ninjas
  @Get()
  getNinja(@Query('weapon') weapon?: 'stars' | 'nunchunks') {
    return this.ninjaService.getNinjas(weapon);
  }
  //Get: Fetch  oneNinja
  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    //adding a pipe to transform the id to a number before it's been feed to the controller
    return this.ninjaService.getOneNinja(id); //the function is expecting a parameter of type number and the id is a string is we've got to cast it to a number hence the + before it
  }
  //POST:Create Ninja
  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjasDto: CreateNinjasDto) {
    //adding a pipe to help validate data
    return this.ninjaService.createNinja(createNinjasDto);
  }
  //PUT: Update Ninja
  @Put(':id')
  updateNinja(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNinjasDto: UpdateNinjasDto,
  ) {
    return this.ninjaService.updateNinja(id, updateNinjasDto);
  }

  //DELETE: Delete Ninja
  @Delete(':id')
  deleteNinja(@Param('id', ParseIntPipe) id: number) {
    return this.ninjaService.deleteNinja(id);
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
