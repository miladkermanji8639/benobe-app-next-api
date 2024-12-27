import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState: TopDoctorState = {
  doctors: [],
  loading: false,
  error: null,
};

export const fetchTopDoctors = createAsyncThunk('doctors/fetchTopDoctors', async () => {
  return [
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image1.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image2.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image3.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image4.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image5.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image2.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image1.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image4.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image3.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image5.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image1.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image2.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image3.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image4.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image5.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image2.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image5.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image1.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image3.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
    {
      name: 'دلارام سهرابی',
      imagePath: '/top_doctor/image4.png',
      speciality: 'فوق تخصص قلب و عروس',
      location: 'تهران',
      first_available: '۱۵ آبان',
      rating: 4.3,
    },
  ];
});

const topDoctorSlice = createSlice({
  name: 'top_doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchTopDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'خطا در بارگزاری';
      });
  },
});

export default topDoctorSlice.reducer;
