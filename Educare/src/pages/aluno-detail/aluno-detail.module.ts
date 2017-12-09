import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoDetailPage } from './aluno-detail';

@NgModule({
  declarations: [
    AlunoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoDetailPage),
  ],
})
export class AlunoDetailPageModule {}
