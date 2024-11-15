export type CottageType = {
  id: number;
  photo: string;
  price: string;
  area: string;
  description: string;
};
export type HousePageProps = {
  cottage: CottageType;
};
