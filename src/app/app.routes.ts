import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ActivitiesComponent } from './activities/activities.component';

export const routes: Routes = [
    {path: "", component: MainComponent},
    {path: "activities", component: ActivitiesComponent},
    {path: "", component: MainComponent},
];
