import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../API/API';
import { TaskList } from '../interfaces/task-list';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  

  constructor(
    private http: HttpClient
  ) { }

  public inputTastDataBase(task: TaskList[]): Observable<any> {
    return this.http.post<any>(`${API}/task-list`, {task: task})
      .pipe(
        resposta => resposta
      )
  }
}
