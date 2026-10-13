function StepThree({
  register,
  errors,
  getValues,
  isSubmitting,
  onBack,
}) {
  const data = getValues();

  const packageNames = {
    frontend: 'Frontend Developer - Rp500.000',
    backend: 'Backend Developer - Rp500.000',
    fullstack: 'Fullstack Developer - Rp900.000',
  };

  const sessionNames = {
    pagi: 'Pagi (09.00 - 12.00)',
    sore: 'Sore (13.00 - 16.00)',
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Langkah 3: Konfirmasi Data
        </h2>

        <p className="text-sm text-gray-500">
          Periksa kembali data sebelum dikirim.
        </p>
      </div>

      <div className="space-y-3 rounded-xl bg-gray-50 p-4 text-sm">
        <div>
          <p className="text-gray-500">Nama Lengkap</p>
          <p className="font-medium">{data.fullName}</p>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <p className="font-medium">{data.email}</p>
        </div>

        <div>
          <p className="text-gray-500">Nomor WhatsApp</p>
          <p className="font-medium">{data.phone}</p>
        </div>

        <div>
          <p className="text-gray-500">Paket Belajar</p>
          <p className="font-medium">
            {packageNames[data.package]}
          </p>
        </div>

        <div>
          <p className="text-gray-500">Sesi Belajar</p>
          <p className="font-medium">
            {sessionNames[data.session]}
          </p>
        </div>
      </div>

      <div>
        <label className="flex items-start gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            {...register('isAgreed', {
              required:
                'Anda harus menyetujui syarat dan ketentuan yang berlaku.',
            })}
            className="mt-1"
          />

          <span>
            Saya menyetujui syarat dan ketentuan yang berlaku.
          </span>
        </label>

        {errors.isAgreed && (
          <p className="mt-1 text-sm text-red-500">
            {errors.isAgreed.message}
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
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          {isSubmitting ? 'Mengirim...' : 'Kirim Pendaftaran'}
        </button>
      </div>
    </div>
  );
}

export default StepThree;