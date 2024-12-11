import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { SignalComponent } from './components/signal/signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dataBinding',
        pathMatch: 'full'
    },
    {
        path:'admin',
        component: AdminComponent
    },
    {
        path:'dataBinding',
        component:DataBindingComponent
    },
    {
        path:'ng-for',
        component: NgForComponent
    },
    {
        path:'signal',
        component:SignalComponent
    },
    {
        path:'template-form',
        component:TemplateFormComponent
    },
    {
        path:'reactive-form',
        component:ReactiveFormComponent
    },
    {
        path:'get-api',
        component:GetApiComponent
    },
    {
        path:'about/:id',
        component:AboutComponent
    }
];
