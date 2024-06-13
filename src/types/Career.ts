export type Career = {
  profession: string;
  employmentType: string;
  company: string;
  location: Location;
  remote: boolean;
  periodStart: string;
  periodEnd: string;
  description: string;
  keywords: string[];
  link: string;
  logo?: string;
};

type Location = {
  city: string;
  country: string;
};
