import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeName: string[] = ['Spiderman','Superman', 'Batman', 'Thor',]

  public deletedHero?:string;


  removeLastHero():void{
    this.deletedHero = this.heroeName.pop();
  }

}
