interface IDate {
  calendar: {
    identifier: string;
  };
  day: number;
  month: number;
  era: string;
  year: number;
}

export const DateToIso = (date: IDate) => {
  if (!date) {
    return new Date().toISOString();
  }
  return new Date(`${date?.month}-${date?.day}-${date?.year}`).toISOString();
};
