import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor( private router: Router,
              public title: Title,
              public meta: Meta) { 

    
    this.getDataRoute().subscribe( data => {

        console.log(data);

        // Modificar tags div h1
        this.label = data.titulo;

        // Modificar titulo de la página
        this.title.setTitle( this.label );

        // Modificar metatags
        let metaTags: MetaDefinition = {
          name: 'description',
          content: this.label
        };

        this.meta.updateTag(metaTags);

      });

  }

  getDataRoute(){
    return this.router.events
    .filter( evento => evento instanceof ActivationEnd )
    .filter( (evento: ActivationEnd ) => evento.snapshot.firstChild === null )
    .map( (evento: ActivationEnd ) => evento.snapshot.data );
  }

  ngOnInit() {
  }

}
