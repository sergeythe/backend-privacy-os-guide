import { OS } from "./os";

export interface Article extends OS {
  readonly site: string;
  readonly content: {
    image: string;
    paragraphs: string[];
  };
}
