export interface DieFace {
  value: number;
  numOccurences: number;
  display?: string;
}

export interface Die {
  faces: DieFace[];
  color?: string;
}
