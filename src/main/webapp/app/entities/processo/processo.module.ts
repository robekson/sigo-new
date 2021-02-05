import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SigoSharedModule } from 'app/shared/shared.module';
import { ProcessoComponent } from './processo.component';
import { ProcessoDetailComponent } from './processo-detail.component';
import { ProcessoUpdateComponent } from './processo-update.component';
import { ProcessoDeleteDialogComponent } from './processo-delete-dialog.component';
import { processoRoute } from './processo.route';

@NgModule({
  imports: [SigoSharedModule, RouterModule.forChild(processoRoute)],
  declarations: [ProcessoComponent, ProcessoDetailComponent, ProcessoUpdateComponent, ProcessoDeleteDialogComponent],
  entryComponents: [ProcessoDeleteDialogComponent],
})
export class SigoProcessoModule {}
