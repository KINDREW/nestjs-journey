import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [NinjasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/* Modules in Nest.js are fundamental building blocks that help organize and structure your application.
They provide a way to group related components, services, controllers, and other elements into one unit, promoting modularity and reusability.
A module in NestJS is defined using the @Module() decorator
The @Module() decorator can include the following properties:
import - this is an array that contains other modules the module needs to function 
controllers: this is an array of controllers that belong to the module
providers: this is an array of services that can be used the controllers in the module or other services int he module
exports: this is an array of providers that should be available to any module that imports the the module


To create a module we use:

nest generate module <module name> or
nest g module <module name>

*/
