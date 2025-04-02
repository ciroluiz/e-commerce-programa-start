import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: false,
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
})
export class ContatoComponent {
  formContato: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formContato = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      assunto: ['', [Validators.required, Validators.minLength(10)]],
      telefone: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  enviarFormulario() {
    if (this.formContato.valid) {
      alert('Formulário enviado com sucesso!');
      this.formContato.reset();
    }
  }
}
