import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProposalComponent } from '../proposal/proposal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  resultModal:boolean = false


  constructor(private dialog: MatDialog){}

  openDialogProposal(){
    const dialogRef = this.dialog.open(ProposalComponent, {
      disableClose:true,
      width: '60%'
    })

    dialogRef.afterClosed().subscribe((modal:any)=>{
      if(modal){
        this.resultModal = true
      }
    })
  }

}
