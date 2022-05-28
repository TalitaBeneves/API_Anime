export interface AnimeModel {
  id: any;
  type: string;
  attributes: AttributesModel;
}

export interface AttributesModel {
  canonicalTitle: string;
  posterImage: ImagemModel;
  titles: TitleModel;
  description: string;
  episodeCount: number;
  status: string;
  inicioData: Date;
  rankPopular: number;
  classificaçãoET: number;
  tituliJap: string;
}

export interface ImagemModel {
  large: string;
  original: string;
  small: string;
  tiny: string;
  medium: string;
}
export interface TitleModel {
  en: string;
  en_jp: string;
  ja_jp: string;
}
