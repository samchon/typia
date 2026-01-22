import { tags } from "typia";
import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface ObjectHttpFormData {
  id: string & tags.Format<"uuid">;
  number: number;
  integers: Array<number & tags.Type<"int32">>;
  blob: Blob;
  blobs: Blob[];
  file: File;
  files: File[];
}
export namespace ObjectHttpFormData {
  export const ADDABLE = false;
  export const BINARABLE = false;
  export const FORMDATA = true;
  export const JSONABLE = false;

  export function generate(): ObjectHttpFormData {
    return {
      id: v4(),
      number: TestRandomGenerator.number(),
      integers: TestRandomGenerator.array(() => TestRandomGenerator.integer()),
      blob: new Blob(),
      blobs: TestRandomGenerator.array(() => new Blob()),
      file: new File([], "file"),
      files: TestRandomGenerator.array(() => new File([], "file")),
    };
  }

  export const SPOILERS: Spoiler<ObjectHttpFormData>[] = [
    (input) => {
      input.id = "something";
      return ["$input.id"];
    },
    (input) => {
      input.number = "abcd" as any;
      return ["$input.number"];
    },
    (input) => {
      input.integers = [3, 3.14, 3.141592];
      return ["$input.integers[1]", "$input.integers[2]"];
    },
    (input) => {
      input.blob = new Uint8Array() as any;
      return ["$input.blob"];
    },
    (input) => {
      input.blobs = ["string"] as any;
      return ["$input.blobs[0]"];
    },
    (input) => {
      input.file = new Uint8Array() as any;
      return ["$input.file"];
    },
    (input) => {
      input.files = [new Uint8Array()] as any;
      return ["$input.files[0]"];
    },
  ];
}
