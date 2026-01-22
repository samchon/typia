import typia from "typia";

import { Spoiler } from "./Spoiler";

export interface TestStructure<T> {
  name: string;
  generate?(): T;
  SPOILERS?: Spoiler<T>[];
  ADDABLE?: boolean;
  BINARABLE?: boolean;
  FORMDATA?: boolean;
  QUERY?: boolean;
  HEADERS?: boolean;
  RESOLVABLE?: boolean;
  JSONABLE?: boolean;
  PRIMITIVE?: boolean;
  RANDOM?: false | typia.IRandomGenerator;
  RECURSIVE?: true;
}
