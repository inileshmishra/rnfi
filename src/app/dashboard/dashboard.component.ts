import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DashboardService } from '../_services/dashboard.service';
import { Datum } from '../_interface/formData.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public formData: Datum;
  dataForm: FormGroup;
  sucessMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private dashboardSer: DashboardService) { }

  ngOnInit(): void {
    this.getData();
  }

  /**
   * Api for data when user logedin.
   */
  getData(): void {
    this.dashboardSer.getDynamicFormData('e090c25187ee2b3f9f1f8a02747356641', 'e090c25187ee2j890890skjb3f9f1f8a027r7kjd99')
      .subscribe(
        (data) => {
          this.formData = data.data[0];
          this.dataForm = this.formBuilder.group({
            icici_slab_min: [data.data[0].icici.slab_min, Validators.required],
            icici_slab_max: [data.data[0].icici.slab_max, Validators.required],
            icici_slab_value: [data.data[0].icici.value, Validators.required],
            icici_is_fixed: [data.data[0].icici.is_fixed, Validators.required],

            indus_slab_min: [data.data[0].indus.slab_min, Validators.required],
            indus_slab_max: [data.data[0].indus.slab_max, Validators.required],
            indus_slab_value: [data.data[0].indus.value, Validators.required],
            indus_is_fixed: [data.data[0].indus.is_fixed, Validators.required],

            fino_slab_min: [data.data[0].fino.slab_min, Validators.required],
            fino_slab_max: [data.data[0].fino.slab_max, Validators.required],
            fino_slab_value: [data.data[0].fino.value, Validators.required],
            fino_is_fixed: [data.data[0].fino.is_fixed, Validators.required]
          });
          console.log(this.formData);
        });
  }


  /**
   * when user submit form Data.
   */
  onSubmit(): void {
    console.log(this.dataForm);
    const updateData = {
      "icici": {
        "slab_min": this.dataForm.value.icici_slab_min, "slab_max": this.dataForm.value.icici_slab_max,
        "value": this.dataForm.value.icici_slab_value, "is_fixed": this.dataForm.value.icici_is_fixed
      },
      "indus": {
        "slab_min": this.dataForm.value.indus_slab_min, "slab_max": this.dataForm.value.indus_slab_max,
        "value": this.dataForm.value.indus_slab_value, "is_fixed": this.dataForm.value.indus_is_fixed
      },
      "fino": {
        "slab_min": this.dataForm.value.fino_slab_min, "slab_max": this.dataForm.value.fino_slab_max,
        "value": this.dataForm.value.fino_slab_value, "is_fixed": this.dataForm.value.fino_is_fixed
      }
    };



    this.dashboardSer.updateDynamicFormData('e090c25187ee2b3f9f1f8a02747356641', 'e090c25187ee2j890890skjb3f9f1f8a027r7kjd99', updateData)
      .subscribe(
        (data) => {
          this.sucessMessage = data.message;

          setTimeout(() => {
            this.sucessMessage = null;
          }, 10000);
        });
  }

}
