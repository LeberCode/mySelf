export type Education = {
  degree: string;
  institution: string;
  grade: string;
  location: Location;
  periodStart: string;
  periodEnd: string;
  description: string;
  link: string;
  link2: string;
  logo: string;
};

type Location = {
  city: string;
  country: string;
};
