import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalComponent } from './proposal.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { FileDropModule } from 'ngx-file-drop';

import { CommitteeMemberNonEmployeeElasticService  } from '../elastic-search/committee-members-nonEmployee-elastic-search.service';
import { CommitteeMemberEmployeeElasticService } from '../elastic-search/committee-members-employees-elastic-search.service';
import { GrantService } from "../grant/grant.service";
import { ProposalCreateEditService } from '../proposal/proposal-create-view.service';

let routes = [{ path: '', component: ProposalComponent },
              { path: 'proposal', component: ProposalComponent },
              { path: 'createProposal', component: ProposalComponent },
              { path: 'viewSubmittedProposal', component: ProposalComponent}];

@NgModule({
  imports: [
    CommonModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule, ReactiveFormsModule,
    Ng2CompleterModule,
	FileDropModule,
    RouterModule.forChild( routes )
  ],
  declarations: [ProposalComponent],
  providers: [ProposalCreateEditService,CommitteeMemberEmployeeElasticService,CommitteeMemberNonEmployeeElasticService, GrantService]
})
export class ProposalModule { }
