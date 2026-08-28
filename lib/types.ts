export type Interview = {
  language: "Hindi" | "English" | "Hinglish";
  transcript?: string;
  translatedTranscript?: string;
  highlights?: string[];
};

export type Person = {
  id: string;
  name: string;
  role: string;
  department: string;
  age?: number;
  address?: string;
  yearsAtCampus?: number;
  image?: string;
  coverImage?: string;
  shortBio: string;
  background?: string;
  dailyRoutine?: string;
  story?: string;
  quote?: string;
  videoUrl?: string;
  audioUrl?: string;
  gallery?: string[];
  interview?: Interview;
  consentStatus: boolean;
  featured?: boolean;
};

export type Department = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  coverImage?: string;
  people: string[];
};
