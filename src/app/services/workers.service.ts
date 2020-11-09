import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WorkerModel } from "../models/worker.model";
import { map, delay } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class WorkersService {
  private url = "https://test-2f236.firebaseio.com";
  constructor(private http: HttpClient) {}
  crearWorker(worker: WorkerModel) {
    return this.http.post(`${this.url}/workers.json`, worker).pipe(
      map((resp: any) => {
        worker.id = resp.name;
        return worker;
      })
    );
  }

  getWorker(id: String) {
    return this.http.get(`${this.url}/workers/${id}.json`);
  }
  actualizarWorker(worker: WorkerModel) {
    const workerTemp = {
      ...worker,
    };
    delete workerTemp.id;
    return this.http.put(`${this.url}/workers/${worker.id}.json`, workerTemp);
  }
  borrarWorker(id: String) {
    return this.http.delete(`${this.url}/workers/${id}.json`);
  }
  getWorkers() {
    return this.http
      .get(`${this.url}/workers.json`)
      .pipe(map((res) => this.crearArreglo(res)));
  }

  private crearArreglo(workersObject: object) {
    if (workersObject === null) {
      return null;
    }
    const workers: WorkerModel[] = [];

    Object.keys(workersObject).forEach((key) => {
      const worker: WorkerModel = workersObject[key];
      worker.id = key;
      workers.push(worker);
    });

    return workers;
  }
}
