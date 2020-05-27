import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeaderComponent} from './components/header/header.component'
import {FooterComponent} from './components/footer/footer.component'
import { ClientesComponent } from './components/clientes/clientes.component';
import {AboutComponent} from './components/about/about.component'
import {VideoComponent} from './components/video/video.component'


const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'about', component: AboutComponent },
    {path: 'clientes', component: ClientesComponent},
    {path: 'video', component: VideoComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}


