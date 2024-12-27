import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState: StoryState = {
  stories: [],
  loading: false,
  error: null,
};

export const fetchStories = createAsyncThunk('stories/fetchStories', async () => {
  // axios.get('https://74.64.126.434/stories')
  return [
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story1.png',
      live: true,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story2.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story3.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story4.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story5.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story6.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story7.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story8.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story9.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story10.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story11.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story12.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story1.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story2.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story3.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story4.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story5.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story6.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story7.png',
      live: false,
    },
    {
      name: 'مهناز حبیبی',
      imagePath: '/story/story8.png',
      live: false,
    },
  ];
});

const storySlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.loading = false;
        state.stories = action.payload;
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'خطا در بارگزاری';
      });
  },
});

export default storySlice.reducer;
