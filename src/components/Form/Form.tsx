const Form = () => {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='FirstNameInputField' className='form-label'>
          First Name
        </label>
        <input
          type='text'
          className='form-control'
          id='FirstNameInputField'
          aria-describedby='firstNameHelp'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='LastNameInputField' className='form-label'>
          Last Name
        </label>
        <input
          type='text'
          className='form-control'
          id='LastNameInputField'
          aria-describedby='lastNameHelp'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='EmailInputField' className='form-label'>
          Email
        </label>
        <input
          type='email'
          className='form-control'
          id='EmailInputField'
          aria-describedby='emailNameHelp'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='PasswordInputField' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='PasswordInputField'
          aria-describedby='passwordNameHelp'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='ConfirmPasswordInputField' className='form-label'>
          Confirm Password
        </label>
        <input
          type='password'
          className='form-control'
          id='ConfirmPasswordInputField'
          aria-describedby='passwordNameHelp'
        />
      </div>
      <div className='d-grid gap-2'>
        <button className='btn btn-primary' type='button'>
          Submit
        </button>

      </div>
    </form>
  );
};

export default Form;
