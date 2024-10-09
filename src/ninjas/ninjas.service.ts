import { Injectable } from '@nestjs/common';
import { CreateNinjasDto } from './dto/create-ninjas.dto';
import { UpdateNinjasDto } from './dto/update-ninjas.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'NinjaA', weapon: 'stars' },
    { id: 1, name: 'NinjaB', weapon: 'nunchunks' },
    { id: 2, name: 'NinjaC', weapon: 'nunchunks' },
  ];

  getNinjas(weapon?: 'stars' | 'nunchunks') {
    if (weapon === 'stars') {
      return this.ninjas.filter((ninjas) => ninjas.weapon === weapon);
    }
    return this.ninjas;
  }

  getOneNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    return ninja;
  }

  createNinja(createNinjasDto:CreateNinjasDto){
    const newNinja = {
      ...createNinjasDto,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);

    return this.ninjas;
  }

  updateNinja(id: number, updateNinjasDto: UpdateNinjasDto) {
    this.ninjas = this.ninjas.map((ninjas) => {
      if (ninjas.id == id) {
        return { ...ninjas, ...updateNinjasDto };
      }
      return ninjas;
    });

    return this.getOneNinja(id);
  }

  deleteNinja(id: number) {
    const ninjaToBeRemoved = this.ninjas.find((ninja) => ninja.id === id);

    this.ninjas = this.ninjas.filter((ninja) => ninja.id != id);

    return ninjaToBeRemoved;
  }
}
