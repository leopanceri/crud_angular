import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodosPessoa(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE];
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserirPessoa(pessoa: Pessoa): void{
    const pessoas = this.listarTodosPessoa();
    pessoa.id = new Date().getTime();
    pessoas.push(pessoa);
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  buscarPessoaPorId(id: number): Pessoa | undefined {
    const pessoas: Pessoa[] = this.listarTodosPessoa();
    return pessoas.find(pessoa => pessoa.id === id);
  }

  atualizarPessoa(pessoa: Pessoa): void{
    const pessoas: Pessoa[] = this.listarTodosPessoa();
    pessoas.forEach((obj, index, objs)=>{
      if(pessoa.id === obj.id){
        objs[index] = pessoa
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  removerPessoa(id: number): void{
    let pessoas: Pessoa[] = this.listarTodosPessoa();
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
