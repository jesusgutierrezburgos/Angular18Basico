import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { task } from '../../model/task';
import { CreateTaskComponent } from '../../components/create-task/create-task.component';
import { LocalDBService } from '../../services/local-db.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CreateTaskComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  db = inject(LocalDBService);
  
  todo:task[]=[];

  ngOnInit(){
    this.todo = this.db.load();
  }

  addTask(newTask:task){
    this.todo.push(newTask);
    this.db.save(this.todo);
  }

  removeTask(id:number|undefined){
    if(!id) return;  //validación opcional
    if(!confirm("¿Está seguro?")) return;

    this.todo=this.todo.filter(t=>t.id!=id);
    this.db.save(this.todo);
  }

  editTask(task:task) {
    task.newTitle=task.title;
    task.update=true;
  }

  updateTask(task:task) {
    task.title=task.newTitle as string;
    task.newTitle=undefined;
    task.update=undefined;
    this.db.save(this.todo);
  }

  cancelEdit(task:task) {
    task.update=undefined;
    task.newTitle=undefined;
  }

}
