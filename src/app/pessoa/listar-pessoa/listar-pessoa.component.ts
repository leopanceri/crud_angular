import { Component, OnInit} from '@angular/core';

import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit{
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService){}

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    return this.pessoaService.listarTodosPessoa();
    /*return[
      new Pessoa(1, "Maria", 44),
      new Pessoa(2, "André", 29),
      new Pessoa(3, "Paulo", 66),
      new Pessoa(4, "Juliana", 35)
    ];*/
  }
}
