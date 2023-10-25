import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent {
  formProposal!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    //criação do formulário
    this.buildFormProposal();
  };

  buildFormProposal() {
    this.formProposal = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      company: [null, [Validators.minLength(3)]],
      phone: [null],
      proposal: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(200)]],
    })
  }

  sendProposal() {
    console.log("Proposta enviada!")
  }
}
