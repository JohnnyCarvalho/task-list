//teste commit

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskList } from 'src/app/interfaces/task-list';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.css']
})
export class ToDoInputAddItensComponent implements OnInit {

  @Output()
  public emmitItemTaskList = new EventEmitter();

  public addItemTaskList!: string;

  constructor(
    private taskService: TaskServiceService
  ) { }

  ngOnInit(): void {
  }

  public submmitTaskList() {

    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList) {
      
      let itemTaskList: ToDoListComponent = new ToDoListComponent()

      let task: TaskList

      this.emmitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = ""

      this.taskService.inputTastDataBase(itemTaskList.taskList)
       .subscribe(
        (resposta) => {
          this.addItemTaskList = resposta
        }
       )
    }
  }
}
