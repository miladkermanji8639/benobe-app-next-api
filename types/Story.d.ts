interface StoryProps {
  name: string;
  imagePath: string;
  live: boolean;
}

interface StoryState {
  stories: StoryProps[];
  loading: boolean;
  error: string | null;
}
