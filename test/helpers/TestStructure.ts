import { IRandomGenerator } from "../../src/IRandomGenerator";
import { Spoiler } from "./Spoiler";

export interface TestStructure<T> {
  constructor: {
    name: string;
  };
  generate(): T;
  SPOILERS?: Spoiler<T>[];
  ADDABLE?: boolean;
  BINARABLE?: boolean;
  JSONABLE?: boolean;
  PRIMITIVE?: boolean;
  RANDOM?: false | IRandomGenerator;
}
