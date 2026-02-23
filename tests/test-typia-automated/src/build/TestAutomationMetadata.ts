import { Spoiler } from "@typia/template";
import typia from "typia";

export interface TestAutomationMetadata<T> {
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
