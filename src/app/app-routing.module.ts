import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {'path': '', redirectTo:'sveiks', pathMatch:'full'},
  {'path':'sveiks', component:WelcomeComponent},
  {'path':'klausimas', component:QuestionComponent},
  {'path':'rezultatai', component:ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
