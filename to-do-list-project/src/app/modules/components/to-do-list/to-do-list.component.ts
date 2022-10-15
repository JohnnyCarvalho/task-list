import { Component, DoCheck, OnInit } from '@angular/core';


//Interface
import { TaskList } from '../../../interfaces/task-list';
import { ToDoInputAddItensComponent } from '../to-do-input-add-itens/to-do-input-add-itens.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit, DoCheck {

  public taskList: Array<TaskList> = []

  constructor() { }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.taskList.sort((first, last) => 
      Number(first.checked) - Number(last.checked)
    )
  }

  public deleteItenTaskList = (event: number) => {
    this.taskList.splice(event, 1);
    console.log(this.taskList.length);

  }

  public deleteAll = () => {
    const confirmDel = window.confirm('Do you want to delete all?')

    if (confirmDel === true) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string) {

      this.taskList.push({ task: event, checked: false})
      console.log(this.taskList.length);
    
  }

  public validationInput(event: string, index: number) {

    if (!event.length) {
      let confirm = window.confirm(`Deseja deletar a task nº ${index + 1}?`)

      if (confirm) {
        this.deleteItenTaskList(index)
      }
    }

  }
}
