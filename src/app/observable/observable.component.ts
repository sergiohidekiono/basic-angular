import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private formsBuilder: FormBuilder) {
    this.formGroup = this.formsBuilder.group({
      name: [''],
    });
  }

  get getForms() {
    return this.formGroup.controls;
  }

  ngOnInit() {}

  onSubmit(type: string) {
    const name = this.getForms['name'].value;
    if (type == 'promise') {
      this.onPromise(name)
        .then(() => {
          alert(`Olá ${name} usando Promise`);
        })
        .catch((err) =>
          alert(
            `Não existe um usuário com nome ${name.toUpperCase()} no Promise`
          )
        );
    } else {
      const observer = {
        // conceito de observer para realizar operações mais complexas
        next: (res: any) => console.log('next', res),
        error: (error: any) => console.log('erro', error),
        complete: () => console.log('erro'),
      };

      const obs = this.onObservable('Admin', 'admin@admin.com');
      obs.subscribe(observer);

      // this.onObservable(name).subscribe(
      //   (result) => {
      //     alert(`Olá ${name} usando Observable`);
      //   },
      //   (err) =>
      //     alert(
      //       `Não existe um usuário com nome ${name.toUpperCase()} no Observable`
      //     ),
      //   () => alert(`Completo`)
      // );
    }
  }

  onPromise(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (name === 'Sergio') {
        resolve(`Olá ${name}!`);
      } else {
        reject(`Não existe um usuário com esse nome!`);
      }
    });
  }

  onObservable(name: string, email: string): Observable<Usuario> {
    return new Observable((subscribe) => {
      if (name === 'Admin') {
        let usuario = new Usuario(name, email);

        setTimeout(() => {
          subscribe.next(usuario);
        }, 1000);
        setTimeout(() => {
          subscribe.next(usuario);
        }, 2000);
        setTimeout(() => {
          subscribe.next(usuario);
        }, 3000);
        setTimeout(() => {
          subscribe.next(usuario);
        }, 4000);
        setTimeout(() => {
          subscribe.complete();
        }, 5000);
      } else {
        subscribe.error('Não existe um usuário com esse nome!');
      }
    });
  }
}

export class Usuario {
  nome: string;
  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}
