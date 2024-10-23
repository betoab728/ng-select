import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent,
    FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  clients = [
    { id: 1, nombreCompleto: 'Juan Pérez' },
  { id: 2, nombreCompleto: 'Ana García' },
  { id: 3, nombreCompleto: 'Luis Ramírez' },
  { id: 4, nombreCompleto: 'María Fernández' },
  { id: 5, nombreCompleto: 'Carlos Gómez' },
  { id: 6, nombreCompleto: 'Sofía López' },
  { id: 7, nombreCompleto: 'Miguel Torres' },
  { id: 8, nombreCompleto: 'Laura Moreno' },
  { id: 9, nombreCompleto: 'Pedro Castillo' },
  { id: 10, nombreCompleto: 'Lucía Ruiz' }
  ];
  selectedClient = null;
}
