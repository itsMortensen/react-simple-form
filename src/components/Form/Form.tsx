import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z
  .object({
    firstName: z
      .string()
      .min(5, { message: 'first name can not be less than 3 characters' })
      .max(50, {
        message: 'first name length can not be more than 50 charaters',
      })
      .trim(),
    lastName: z
      .string()
      .min(3, { message: 'last name can not be less than 3 characters' })
      .max(50, {
        message: 'last name length can not be more than 50 charaters',
      })
      .trim(),
    age: z
      .number({
        required_error: 'Age is required',
        invalid_type_error: 'Age field Accept only valid numbers',
      })
      .gte(18),
    email: z.string().email().trim(),
    password: z
      .string()
      .min(8, { message: 'password length should be at least 8 characters' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'password length should be at least 8 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  });
type FormData = z.infer<typeof schema>;
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSumbit = (data: FieldValues) => {
    console.log(data);
    reset();
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSumbit)}>
      <div className='mb-3'>
        <label htmlFor='FirstNameInputField' className='form-label'>
          First Name
        </label>
        <input
          {...register('firstName')}
          type='text'
          className='form-control'
          id='FirstNameInputField'
          aria-describedby='text'
        />
        {errors.firstName && (
          <p className='text-danger'>{errors.firstName.message}</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='LastNameInputField' className='form-label'>
          Last Name
        </label>
        <input
          {...register('lastName')}
          type='text'
          className='form-control'
          id='LastNameInputField'
          aria-describedby='text'
        />
        {errors.lastName && (
          <p className='text-danger'>{errors.lastName.message}</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='AgeInputField' className='form-label'>
          Age
        </label>
        <input
          {...register('age', { valueAsNumber: true })}
          type='number'
          className='form-control'
          id='AgeInputField'
          aria-describedby='text'
        />
        {errors.age && <p className='text-danger'>{errors.age.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='EmailInputField' className='form-label'>
          Email
        </label>
        <input
          {...register('email')}
          type='email'
          className='form-control'
          id='EmailInputField'
          aria-describedby='text'
        />
        {errors.email && <p className='text-danger'>{errors.email.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='PasswordInputField' className='form-label'>
          Password
        </label>
        <input
          {...register('password')}
          type='password'
          className='form-control'
          id='PasswordInputField'
          aria-describedby='text'
        />
        {errors.password && (
          <p className='text-danger'>{errors.password.message}</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='confirmPasswordInputField' className='form-label'>
          Confirm Password
        </label>
        <input
          {...register('confirmPassword')}
          type='password'
          className='form-control'
          id='confirmPasswordInputField'
          aria-describedby='text'
        />
        {errors.confirmPassword && (
          <p className='text-danger'>{errors.confirmPassword.message}</p>
        )}
      </div>
      <div className='d-grid gap-2'>
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
