import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NodegardenComponent } from './nodegarden.component';


export const routes : Routes = [
	{
		path: 'new',
		component: NodegardenComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

