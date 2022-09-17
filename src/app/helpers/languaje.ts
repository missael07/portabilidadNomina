export class lanjuage {
  //#region Static Text
  public registerTitle =
    localStorage.getItem('lan') === 'ES' ? 'Registrarse' : 'Register';
  public registerSubtitle =
    localStorage.getItem('lan') === 'ES'
      ? 'Crea tu cuenta y disfruta.'
      : 'Create your account and enjoy.';
  public profile = localStorage.getItem('lan') === 'ES' ? 'Perfil' : 'Profile';
  public accountSettings =
    localStorage.getItem('lan') === 'ES'
      ? 'Configuración de la cuenta'
      : 'Account Settings';
  public hveAccount =
    localStorage.getItem('lan') === 'ES'
      ? 'Ya tienes cuenta?'
      : `Already Have an account?`;
  public recoverPassword =
    localStorage.getItem('lan') === 'ES'
      ? 'Recuperar Contraseña'
      : 'Recover Password';
  public forgotPassword =
    localStorage.getItem('lan') === 'ES'
      ? 'Olvidaste tu contraseña?'
      : 'Forgot Password?';
  public dashboardTitle =
    localStorage.getItem('lan') === 'ES' ? 'Bienvenido ' : 'Welcome ';
  public settings =
    localStorage.getItem('lan') === 'ES'
      ? 'Configuración perfil de '
      : 'Settings for user ';
  public instructions =
    localStorage.getItem('lan') === 'ES'
      ? 'Ingresa tu Correo electronico y se te enviarán las instrucciones.'
      : 'Enter your Email and instructions will be sent to you!.';
  public dntHveAccount =
    localStorage.getItem('lan') === 'ES'
      ? 'No tienes cuenta?'
      : `Don't Have an account?`;
  public signUp =
    localStorage.getItem('lan') === 'ES' ? 'Crear Cuenta' : 'Sign Up';
  public signIn =
    localStorage.getItem('lan') === 'ES' ? 'Iniciar Sesión' : 'Sign In';
  public lightSidebar =
    localStorage.getItem('lan') === 'ES' ? 'Sidebar Claro' : 'Light Sidebar';
  public darkSidebar =
    localStorage.getItem('lan') === 'ES' ? 'Sidebar Obscuro' : 'Dark Sidebar';
  public editProfile =
    localStorage.getItem('lan') === 'ES' ? 'Editar Perfil' : 'Edit Profile';
  public settingsTitle =
    localStorage.getItem('lan') === 'ES' ? 'Configuración' : 'Settings';
  public users = localStorage.getItem('lan') === 'ES' ? 'Usuarios' : 'Users';
  public hospitals =
    localStorage.getItem('lan') === 'ES' ? 'Hospitales' : 'Hospitals';
  public doctors = localStorage.getItem('lan') === 'ES' ? 'Medicos' : 'Doctors';
  public wait =
    localStorage.getItem('lan') === 'ES' ? 'Por favor espere.' : 'Please wait.';
  public loading =
    localStorage.getItem('lan') === 'ES' ? 'Cargando...' : 'Loading...';
  public back = localStorage.getItem('lan') === 'ES' ? 'Anteriores' : 'Previus';
  public next = localStorage.getItem('lan') === 'ES' ? 'Siguientes' : 'Next';
  public usersRegistered =
    localStorage.getItem('lan') === 'ES'
      ? 'Usuarios registrados'
      : 'Users registered';
  public role = localStorage.getItem('lan') === 'ES' ? 'Rol' : 'Role';
  public search = localStorage.getItem('lan') === 'ES' ? 'Buscar' : 'Search';
  public isGoogle =
    localStorage.getItem('lan') === 'ES'
      ? 'Es usuario de Google?'
      : 'Is Google user?';
  public noDataFound =
    localStorage.getItem('lan') === 'ES'
      ? 'No se encontraron registros.'
      : 'No Data found.';
  public impersonate =
    localStorage.getItem('lan') === 'ES'
      ? 'Iniciar sesión como '
      : 'Impersonate ';

  //#endregion Static Text

  //#region Fields
  public nameField = localStorage.getItem('lan') === 'ES' ? 'Nombre' : 'Name';
  public passwordField =
    localStorage.getItem('lan') === 'ES' ? 'Contraseña' : 'Password';
  public confirmPasswordField =
    localStorage.getItem('lan') === 'ES'
      ? 'Confirmar Contraseña'
      : 'Confirm Password';
  public emailField =
    localStorage.getItem('lan') === 'ES' ? 'Correo Electronico' : 'Email';
  public termsField =
    localStorage.getItem('lan') === 'ES'
      ? 'Acepto los Terminos y Condiciones'
      : 'Agree with Terms';
  public rememberMeField =
    localStorage.getItem('lan') === 'ES' ? 'Recordar Usuario' : 'Remember me';
  //#endregion Fields

  //#region Buttons
  public resetBtn =
    localStorage.getItem('lan') === 'ES' ? 'Recuperar' : 'Reset';
  public logOutBtn =
    localStorage.getItem('lan') === 'ES' ? 'Cerrar Sesión' : 'LogOut';
  public submitBtn =
    localStorage.getItem('lan') === 'ES' ? 'Guardar' : 'Submit';
  //#endregion Buttons

  //#region Modal Messages
  public saveMessage =
    localStorage.getItem('lan') === 'ES'
      ? 'Información guardada.'
      : 'Data saved.';
  public saveTitle =
    localStorage.getItem('lan') === 'ES' ? 'Guardado.' : 'Saved.';
  public warningMessage =
    localStorage.getItem('lan') === 'ES'
      ? 'Debes de cambiar tu foto de perfil, desde tu cuenta de google.'
      : 'You must change your profile picture from your GOOGLE ACCOUNT..';
  public warningTitle =
    localStorage.getItem('lan') === 'ES' ? 'Atención' : 'Attention';
  public successTitle =
    localStorage.getItem('lan') === 'ES' ? 'Exito' : 'Succesful';
  public successMessage =
    localStorage.getItem('lan') === 'ES'
      ? 'Registro creado con exito.'
      : 'Registered succesfully.';
  public successDeletedMessage =
    localStorage.getItem('lan') === 'ES'
      ? 'Registro eliminado con exito.'
      : 'Registered delted succesfully.';
  public deleteTitle =
    localStorage.getItem('lan') === 'ES' ? 'Estás seguro?' : 'Are you sure?';
  public deleteSubTitle =
    localStorage.getItem('lan') === 'ES'
      ? 'Vas a eliminar a {0}, no podrás revertir esta acción!'
      : `You gonna delete to {0}, you won't be able to revert this! `;
  public confirmDeleteMessage =
    localStorage.getItem('lan') === 'ES' ? 'Si, borralo!' : 'Yes, delete it!';
  public confirmMessage = localStorage.getItem('lan') === 'ES' ? 'Si!' : 'Yes!';

  //#endregion Modal Messages

  //#region Errors

  /* Front Errors*/
  public nameError =
    localStorage.getItem('lan') === 'ES'
      ? 'El nombre es requerido.'
      : 'Required Name.';
  public passwordsError =
    localStorage.getItem('lan') === 'ES'
      ? 'Las contraseñas deben coincidir.'
      : 'Passwords must match.';
  public passwordError =
    localStorage.getItem('lan') === 'ES'
      ? 'La contraseña es requerida.'
      : 'Required Password.';
  public confirmPasswordError =
    localStorage.getItem('lan') === 'ES'
      ? 'La confirmación de la contraseña es requerida.'
      : 'Required Confirm Password.';
  public emailError =
    localStorage.getItem('lan') === 'ES'
      ? 'El correo elctronico es requerido.'
      : 'Required Email.';
  public termsError =
    localStorage.getItem('lan') === 'ES'
      ? 'Debe de aceptar los terminos de uso.'
      : 'You must agree with Terms.';

  /* Back Errors */
  public googleError =
    localStorage.getItem('lan') === 'ES'
      ? 'Usuarios de Google no pueden editar su correo electronico .'
      : `Google user can't update his email.`;
  public emailPasswordError =
    localStorage.getItem('lan') === 'ES'
      ? 'Correo/Contraseña Invalidos.'
      : 'Invalid Email/Password.';
  public adminError =
    localStorage.getItem('lan') === 'ES'
      ? 'Error Inesperado, Contacte al Administrador.'
      : 'Unknown error, Contact to your administrator.';
  public emailExistsError =
    localStorage.getItem('lan') === 'ES'
      ? 'El correo electronico ya ha sido registrado.'
      : 'Email already was registered.';
  public fileExtensionError =
    localStorage.getItem('lan') === 'ES'
      ? 'Extensión no soportada.'
      : 'Extension unsupported.';
  public fileUnLoad =
    localStorage.getItem('lan') === 'ES'
      ? 'No se agrego ninguna imagen para cargar.'
      : 'There is not any image tu upload.';
  public fileError =
    localStorage.getItem('lan') === 'ES'
      ? 'Error al subir la imagen.'
      : 'An error occurred trying to upload the image.';
  public foundError =
    localStorage.getItem('lan') === 'ES'
      ? 'No se encontro información.'
      : 'No data found.';
  public validationField =
    localStorage.getItem('lan') === 'ES'
      ? 'Uno o más campos son requeridos.'
      : 'Required fields has an empty value.';

  //#endregion Errors
}
