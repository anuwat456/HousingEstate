// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Services
import { HttpUtilsService, TypesUtilsService, InterceptService, LayoutUtilsService} from '../../../core/_base/crud';
// Translate
import { TranslateModule } from '@ngx-translate/core';
import { PartialsModule } from '../../partials/partials.module';
// Component
import { UsersComponent } from './users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

// Material
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatExpansionModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule,
} from '@angular/material';
import {
	usersReducer,
	UserEffects
} from '../../../core/auth';

import { HouseComponent } from './users/_subs/house/house.component';
import { UserRoleComponent } from './users/_subs/user-role/user-role.component';
import { ChangePasswordComponent } from './users/_subs/change-password/change-password.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { RoleEditComponent } from './roles/role-edit/role-edit.component';
import { StatusListComponent } from './status/status-list/status-list.component';
import { StatusEditComponent } from './status/status-edit/status-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      	{
			path: '',
			redirectTo: 'users',
			pathMatch: 'full'
      	},
		{
			path: 'users',
			component: UserListComponent
		},
		{
			path: 'roles',
			component: RoleListComponent
		},
		{
			path: 'users/add',
			component: UserEditComponent
		},
		{
			path: 'users/add:idNumber',
			component: UserEditComponent
		},
		{
			path: 'users/edit',
			component: UserEditComponent
		},
		{
			path: 'users/edit/:idNumber',
			component: UserEditComponent
		},
    ]
  }
]

@NgModule({
	declarations: [
		UsersComponent,
		UserListComponent, 
		UserEditComponent, HouseComponent, UserRoleComponent, ChangePasswordComponent, RoleListComponent, RoleEditComponent, StatusListComponent, StatusEditComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		PartialsModule,
		RouterModule.forChild(routes),
		StoreModule.forFeature('users', usersReducer),
		EffectsModule.forFeature([UserEffects]),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MatInputModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatTableModule,
		MatSelectModule,
		MatMenuModule,
		MatProgressBarModule,
		MatButtonModule,
		MatCheckboxModule,
		MatDialogModule,
		MatTabsModule,
		MatNativeDateModule,
		MatCardModule,
		MatRadioModule,
		MatIconModule,
		MatDatepickerModule,
		MatExpansionModule,
		MatAutocompleteModule,
		MatSnackBarModule,
		MatTooltipModule
	],
	providers: [
		InterceptService,
		{
        	provide: HTTP_INTERCEPTORS,
       	 	useClass: InterceptService,
			multi: true
		},
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'kt-mat-dialog-container__wrapper',
				height: 'auto',
				width: '900px'
			}
		},
		HttpUtilsService,
		TypesUtilsService,
		LayoutUtilsService
	],
	entryComponents: [
		RoleEditComponent
	]
})
export class UsersModule { }
