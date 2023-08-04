import { Component,OnInit } from '@angular/core';
import { Curso } from '../shared/curso.model';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit{


  cursos: Curso[];

  constructor(){


  }

  ngOnInit(): void {
    
    
    this.getCursos();

  }

  getCursos(){

    this.cursos = [
      {
        nome:'Angular',
        thumb:'',
        versao:16,
      },

      {
        nome:'Php',
        thumb:'',
        versao:8,
      },

      {
        nome:'Node',
        thumb:'',
        versao:10,
      },

    ]
  }

  showCursos(){

    console.log(this.cursos);
  }


}


