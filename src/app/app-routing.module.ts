import { Component, NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustompreloadingService } from './custompreloading.service';
import { AuthGuard } from './auth.guard';
import { MyauthGuard } from './myauth.guard';


const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},

  //Lazy loading
 {path:'engineer',loadChildren:()=>import('../app/engineer/engineer.module').then(m=>m.EngineerModule)}  ,

 {path:'executive',loadChildren:()=>import('../app/executive/executive.module').then(m=>m.ExecutiveModule),data:{preload:true}},


  //To Load after sometime.
 {path:'manager',loadChildren:()=>import('../app/manager/manager.module').then(m=>m.ManagerModule),data:{preload:true,delay:true}},
  

  //Guard canActivate:
   {path:'user',loadChildren:()=>import('../app/user/user.module').then(m=>m.UserModule),canActivate:[AuthGuard]}  ,
 

   //Guard  canLoad
   {path:'admin',loadChildren:()=>import('../app/admin/admin.module').then(m=>m.AdminModule),canLoad:[MyauthGuard]}  ,
  
];

@NgModule({
 // imports: [RouterModule.forRoot(routes)],

 //For Pre-Loading , lazy loading is important 

//  imports: [RouterModule.forRoot(routes,{preloadingStrategy:NoPreloading})],

// imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],

//For both lazy and preloading
// executive = preload 
imports: [RouterModule.forRoot(routes,{preloadingStrategy:CustompreloadingService})],

//Guard example
//imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}








