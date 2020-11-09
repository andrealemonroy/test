import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { WorkerModel } from "src/app/models/worker.model";
import { WorkersService } from "src/app/services/workers.service";
@Component({
  selector: "app-worker",
  templateUrl: "./worker.component.html",
  styleUrls: ["./worker.component.scss"],
})
export class WorkerComponent implements OnInit {
  worker: WorkerModel = new WorkerModel();
  constructor(private workersService: WorkersService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if(id !== 'nuevo'){
      this.workersService.getWorker(id).subscribe((res:WorkerModel) => {
        this.worker = res;
        this.worker.id = id
      })
    }
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      console.log("Formulario no válido");
    }

    let peticion: Observable<any>
    
    if (this.worker.id) {
      peticion = this.workersService.actualizarWorker(this.worker)
    } else {
      peticion = this.workersService.crearWorker(this.worker)
    }
    peticion.subscribe(res => {
    })
  }
}
