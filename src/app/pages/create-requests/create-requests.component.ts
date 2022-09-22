import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-create-requests',
  templateUrl: './create-requests.component.html',
  styleUrls: ['./create-requests.component.css'],
})
export class CreateRequestsComponent implements OnInit {
  public displayFirstStep: boolean = true;
  public displaySecondStep: boolean = false;
  public displayThirdStep: boolean = false;
  public displayFourtStep: boolean = false;
  public nextStep: boolean = true;

  public requestForm: any;
  public user: User;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private requestService: RequestsService
  ) {
    this.user = userService.user;
  }

  ngOnInit(): void {
    let today = Date.now();

    this.requestForm = this.formBuilder.group({
      requester: [this.user.uid],
      name: [this.user.name, Validators.required],
      requestDate: [
        new Date().toLocaleDateString('en-es', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        [Validators.required],
      ],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      reason: ['', [Validators.required]],
      type: ['', [Validators.required]],
      comments: ['', [Validators.required]],
      responsabilityAcepted: ['', [Validators.required]],
      requestType: ['', [Validators.required]],
      commingDate: ['', [Validators.required]],
      requestTime: ['', Validators.required],
      hours: [false, Validators.required],
    });
  }

  displayStep(step: number) {
    this.hiddeDisplaySteps(step);
  }

  backStep(step: number, currentStep: number) {
    this.resetFormValues(currentStep);
    this.hiddeDisplaySteps(step);
  }

  hiddeDisplaySteps(step: number) {
    switch (step) {
      case 2:
        if (
          !this.requestForm.get('name')?.value ||
          !this.requestForm.get('requestDate')?.value ||
          !this.requestForm.get('requestType')?.value
        ) {
          this.nextStep = false;
          return;
        } else {
          this.displayFirstStep = false;
          this.displaySecondStep = true;
          this.displayThirdStep = false;
          this.displayFourtStep = false;
          this.nextStep = true;
        }
        break;
      case 3:
        if (
          !this.requestForm.get('reason')?.value ||
          !this.requestForm.get('type')?.value
        ) {
          this.nextStep = false;
          return;
        } else {
          this.displayFirstStep = false;
          this.displaySecondStep = false;
          this.displayThirdStep = true;
          this.displayFourtStep = false;
          this.nextStep = true;
        }
        break;
      case 4:
        if (
          !this.requestForm.get('startDate')?.value ||
          !this.requestForm.get('endDate')?.value ||
          !this.requestForm.get('commingDate')?.value ||
          !this.requestForm.get('requestTime')?.value
        ) {
          this.nextStep = false;
          return;
        } else {
          this.displayFirstStep = false;
          this.displaySecondStep = false;
          this.displayThirdStep = false;
          this.displayFourtStep = true;
          this.nextStep = true;
        }
        break;
      default:
        this.displayFirstStep = true;
        this.displaySecondStep = false;
        this.displayThirdStep = false;
        this.displayFourtStep = false;
        break;
    }
  }

  resetFormValues(currentStep: number) {
    let {
      requester,
      name,
      requestDate,
      when,
      startDate,
      endDate,
      reason,
      type,
      approved,
      comments,
      responsabilityAcepted,
      requestType,
      commingDate,
      requestTime,
      hours,
    } = this.requestForm.value;
    console.log(reason);
    switch (currentStep) {
      case 2:
        reason = '';
        type = '';
        break;
      case 3:
        startDate = '';
        endDate = '';
        commingDate = '';
        hours = false;
        requestTime = '';
        break;
      case 4:
        comments = '';
        responsabilityAcepted = false;
        break;
      default:
        break;
    }

    this.requestForm.setValue({
      requester,
      name,
      requestDate,
      when,
      startDate,
      endDate,
      reason,
      type,
      approved,
      comments,
      responsabilityAcepted,
      requestType,
      commingDate,
      requestTime,
      hours,
    });
  }

  createRequest() {
    if (this.requestForm.invalid) {
      console.log(this.requestForm);
      this.nextStep = false;
      return console.log('Formulario con errores');
    }

    this.requestService
      .createRequest(this.requestForm.value)
      .subscribe((resp: any) =>
        this.router.navigateByUrl('/dashboard/solicitudes')
      );
  }

  cancelRequest() {
    this.router.navigateByUrl('/dashboard/requests');
  }
}
