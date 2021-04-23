import { ReactElement } from 'react';

export interface ISlides {
  background: string;
  children: ReactElement;
  firstLink?: ILinks;
  secondLink?: ILinks;
}

export type ILinks = {
  label: string;
  link: string;
};
