import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SigoSharedModule } from 'app/shared/shared.module';
import { ConsultoriaComponent } from './consultoria.component';
import { ConsultoriaDetailComponent } from './consultoria-detail.component';
import { ConsultoriaUpdateComponent } from './consultoria-update.component';
import { ConsultoriaDeleteDialogComponent } from './consultoria-delete-dialog.component';
import { consultoriaRoute } from './consultoria.route';

@NgModule({
  imports: [SigoSharedModule, RouterModule.forChild(consultoriaRoute)],
  declarations: [ConsultoriaComponent, ConsultoriaDetailComponent, ConsultoriaUpdateComponent, ConsultoriaDeleteDialogComponent],
  entryComponents: [ConsultoriaDeleteDialogComponent],
})
export class SigoConsultoriaModule {}
