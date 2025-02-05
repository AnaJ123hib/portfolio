import { Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home/home.component';
import { SkillComponent } from './ui/skills/skill/skill.component';
import { ProjectComponent } from './ui/projects/project/project.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "resume",
        component: SkillComponent
    },
    {
        path: "projects",
        component: ProjectComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
    
];
