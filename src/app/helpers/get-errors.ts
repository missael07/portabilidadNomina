import { lanjuage } from './languaje';
import Swal from 'sweetalert2';

const idiom = new lanjuage();

export const getMEssage = (err: string): string => {
  console.log(err);
  let message = '';
  switch (err) {
    case 'Validation':
      message = idiom.emailPasswordError;
      break;
    case 'Admin':
      message = idiom.adminError;
      break;
    case 'Exists':
      message = idiom.emailExistsError;
      break;
    case 'Found':
      message = idiom.foundError;
      break;
    case 'Success':
      message = idiom.successMessage;
      break;
    case 'Success':
      message = idiom.successDeletedMessage;
      break;
    case 'ValidationField':
      message = idiom.validationField;
      break;
    case 'SuccessDeleted':
      message = idiom.successDeletedMessage;
      break;
  }

  return message;
};

export const displayAlert = (
  title: string,
  msg: string,
  code: string = '',
  icon: string = 'success'
) => {
  switch (icon) {
    case 'success':
      Swal.fire(title, msg, 'success');
      break;
    case 'info':
      Swal.fire(title, msg, 'info');
      break;
    case 'error':
      Swal.fire(`${title} ${code} `, msg, 'error');
      break;
    case 'error':
      Swal.fire(`${title} ${code} `, msg, 'warning');
      break;

    default:
      break;
  }
};
