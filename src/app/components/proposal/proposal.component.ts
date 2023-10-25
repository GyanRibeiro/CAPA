import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent {
  formProposal!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProposalComponent>
  ) {
    this.buildFormProposal();
  };

  buildFormProposal() {
    this.formProposal = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      company: [null, [Validators.minLength(3)]],
      phone: [null],
      proposal: [null, [Validators.required, Validators.minLength(6)]],
    })
  }

  sendProposal() {
    this.dialogRef.close("Proposta enviada!")
  }
}
