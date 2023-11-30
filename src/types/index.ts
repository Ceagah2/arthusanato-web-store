export interface IContainer {
  children: React.ReactNode
}

export interface IHeader {
  image: string
  title: string
  subtitle: string
  id: string;
}
export type THeaderImage = {
  image: string
}

export interface IAbout {
  image: string
  id: string
  title: string
}

export interface ICard {
  id: number;
  image: string;
  title: string;
  description: string;
}