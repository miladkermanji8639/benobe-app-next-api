interface TopDoctorProps {
  name: string;
  imagePath: string;
  speciality: string;
  location: string;
  first_available: string;
  rating: number;
}

interface TopDoctorState {
  doctors: TopDoctorProps[];
  loading: boolean;
  error: string | null;
}

interface LatestDoctorProps {
  name: string;
  imagePath: string;
  speciality: string;
  location: string;
}

interface LatestDoctorState {
  doctors: LatestDoctorProps[];
  loading: boolean;
  error: string | null;
}
