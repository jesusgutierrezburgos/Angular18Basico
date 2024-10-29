import { inject, Injectable } from '@angular/core';
import { task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class LocalDBService {

  /**
   * Devuelve el array de local storage o array vaciño si no existe
   * @returns el array de tareas
   */
  load():task[]{
    let tasks = localStorage.getItem('tasks');
    if(tasks){
      return JSON.parse(tasks);
    }else{
      return [];
    }
  }
  /**
   * Método que guada el array de tareas en local storge
   * @param tasks el array de tareas
   */
  save(tasks:task[]){
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
}
