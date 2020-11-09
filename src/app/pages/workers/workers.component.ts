import { Component, OnInit } from "@angular/core";
import { WorkerModel } from "src/app/models/worker.model";
import { WorkersService } from "src/app/services/workers.service";

@Component({
  selector: "app-workers",
  templateUrl: "./workers.component.html",
  styleUrls: ["./workers.component.scss"],
})
export class WorkersComponent implements OnInit {
  workers: WorkerModel[] = [];
  loading: Boolean = false;
  constructor(private workersService: WorkersService) {}

  ngOnInit() {
    this.loading = true;
    this.workersService.getWorkers().subscribe((res) => {
      this.workers = res;
      console.log(this.workers)
      this.loading = false;
    });
  }

  borrarWorker(worker: WorkerModel, i: number) {
    this.workers.splice(i, 1);
    this.workersService.borrarWorker(worker.id).subscribe();
  }
}
