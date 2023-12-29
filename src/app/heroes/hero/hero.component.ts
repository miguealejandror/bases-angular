import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getheroDescription():string{
    return `${this.name}-${this.age}`;
  }
  changeHero(name:string):void{
    this.name = name;
  }
  changeAge(age:string):void{
    this.age = Number(age)
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
