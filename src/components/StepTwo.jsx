import { Controller } from 'react-hook-form';

function StepTwo({
  onNext,
  onBack,
  register,
  control,
  errors,
  trigger,
  setFocus,
}) {
  const handleNext = async () => {
    const isValid = await trigger(['package', 'session']);

    if (isValid) {
      onNext();
    } else if (errors.package) {
      setFocus('package');
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Langkah 2: Pilih Paket Belajar
        </h2>

        <p className="text-sm text-gray-500">
          Pilih paket dan sesi belajar yang kamu inginkan.
        </p>
      </div>

      <div>
        <label
          htmlFor="package"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Paket Belajar
        </label>

        <Controller
          name="package"
          control={control}
          rules={{
            required: 'Silakan pilih salah satu paket belajar.',
          }}
          render={({ field }) => (
            <select
              {...field}
              id="package"
              className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none"
            >
              <option value="">-- Pilih Paket --</option>
              <option value="frontend">
                Frontend Developer - Rp500.000
              </option>
              <option value="backend">
                Backend Developer - Rp500.000
              </option>
              <option value="fullstack">
                Fullstack Developer - Rp900.000
              </option>
            </select>
          )}
        />

        {errors.package && (
          <p className="mt-1 text-sm text-red-500">
            {errors.package.message}
          </p>
        )}
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">
          Sesi Belajar
        </p>

        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="radio"
              value="pagi"
              {...register('session', {
                required: 'Pilih salah satu sesi belajar.',
              })}
            />
            Pagi (09.00 - 12.00)
          </label>

          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="radio"
              value="sore"
              {...register('session', {
                required: 'Pilih salah satu sesi belajar.',
              })}
            />
            Sore (13.00 - 16.00)
          </label>
        </div>

        {errors.session && (
          <p className="mt-1 text-sm text-red-500">
            {errors.session.message}
          </p>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-300"
        >
          Kembali
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

export default StepTwo;