
function StepOne({
  register,
  errors,
  trigger,
  setFocus,
  isValidating,
  onNext,
}) {
  const handleNext = async () => {
    const isValid = await trigger([
      'fullName',
      'email',
      'phone',
    ]);

    if (isValid) {
      onNext();
    } else {
      if (errors.fullName) {
        setFocus('fullName');
      } else if (errors.email) {
        setFocus('email');
      } else if (errors.phone) {
        setFocus('phone');
      }
    }
  };

  return (
    <div className='space-y-4'>
      <div>
        <h2 className='text-base font-semibold text-gray-800'>
          Langkah 1: Informasi Pribadi
        </h2>

        <p className='text-xs text-gray-500'>
          Isi data diri Anda dengan benar.
        </p>
      </div>

      <div>
        <label
          htmlFor='fullName'
          className='block text-xs font-medium text-gray-700 mb-1'>
          Nama Lengkap <span className='text-red-500'>*</span>
        </label>

        <input
          autoFocus
          id='fullName'
          type='text'
          placeholder='Masukkan nama lengkap...'
          className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
            errors.fullName
              ? 'border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:ring-blue-200'
          }`}
          {...register('fullName', {
            required: 'Nama lengkap wajib diisi.',
            minLength: {
              value: 3,
              message: 'Nama lengkap minimal 3 karakter.',
            },
          })}
        />

        {errors.fullName && (
          <p className='text-xs text-red-500 mt-1'>
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor='email'
          className='block text-xs font-medium text-gray-700 mb-1'>
          Email Aktif <span className='text-red-500'>*</span>
        </label>

        <input
          id='email'
          type='email'
          placeholder='contoh: user@mail.com'
          className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
            errors.email
              ? 'border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:ring-blue-200'
          }`}
          {...register('email', {
            required: 'Email wajib diisi.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Format email tidak valid.',
            },
          })}
        />

        {errors.email && (
          <p className='text-xs text-red-500 mt-1'>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor='phone'
          className='block text-xs font-medium text-gray-700 mb-1'>
          Nomor WhatsApp <span className='text-red-500'>*</span>
        </label>

        <input
          id='phone'
          type='tel'
          placeholder='Contoh: 081234567890'
          className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
            errors.phone
              ? 'border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:ring-blue-200'
          }`}
          {...register('phone', {
            required: 'Nomor WhatsApp wajib diisi.',
            pattern: {
              value: /^[0-9]{10,13}$/,
              message:
                'Nomor WhatsApp harus berupa angka dan bernilai 10-13 digit.',
            },
          })}
        />

        {errors.phone && (
          <p className='text-xs text-red-500 mt-1'>
            {errors.phone.message}
          </p>
        )}
      </div>

      {isValidating && (
        <p className='text-xs text-gray-500'>
          Sedang memvalidasi...
        </p>
      )}

      <div className='pt-4 flex justify-end'>
        <button
          type='button'
          onClick={handleNext}
          disabled={isValidating}
          className='px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-medium rounded-lg transition disabled:opacity-50'>
          Lanjut ke Step 2 →
        </button>
      </div>
    </div>
  );
}

export default StepOne;