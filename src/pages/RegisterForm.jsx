
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';

function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    setFocus,
    getValues,
    control,
    formState: {
      errors,
      isValidating,
      isSubmitting,
    },
  } = useForm({
    mode: 'onChange',
    shouldUnregister: false,
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      package: '',
      session: '',
      isAgreed: false,
    },
  });

  const onSubmit = async (data) => {
    console.log('Data Formulir:', data);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    alert('Pendaftaran berhasil dikirim!');
  };

  return (
    <div className='max-w-2xl mx-auto'>
      <div className='bg-white p-6 rounded-2xl shadow border border-gray-200'>

        <form onSubmit={handleSubmit(onSubmit)}>

          {currentStep === 1 && (
            <StepOne
              register={register}
              errors={errors}
              trigger={trigger}
              setFocus={setFocus}
              isValidating={isValidating}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <StepTwo
              onNext={() => setCurrentStep(3)}
              onBack={() => setCurrentStep(1)}
              register={register}
              control={control}
              errors={errors}
              trigger={trigger}
              setFocus={setFocus}
            />
          )}

          {currentStep === 3 && (
            <StepThree
              register={register}
              errors={errors}
              getValues={getValues}
              isSubmitting={isSubmitting}
              onBack={() => setCurrentStep(2)}
            />
          )}

        </form>
      </div>
    </div>
  );
}

export default RegisterForm;