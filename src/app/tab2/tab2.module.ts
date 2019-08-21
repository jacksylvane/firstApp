import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExerciseCategoryComponent } from '../components/exercise-category/exercise-category.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [
    Tab2Page,
    ExerciseCategoryComponent,
    SearchBarComponent
  ]
})
export class Tab2PageModule { }
