import { tags } from "typia";
import { v4 } from "uuid";

import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

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
    // EVERY BINARY PART CARRIES CONTENT AND METADATA.
    //
    // These parts used to be `new Blob()` and `new File([], "file")`, so a
    // `FormData` oracle that lost every byte and every media type still
    // compared equal. Distinct bytes, media types, names, and modification
    // times give the round trip something it can actually corrupt.
    const bytes = (): Uint8Array<ArrayBuffer> =>
      Uint8Array.from(
        TestRandomGenerator.array(() => TestRandomGenerator.integer(0, 255)),
      );
    return {
      id: v4(),
      number: TestRandomGenerator.number(),
      integers: TestRandomGenerator.array(() => TestRandomGenerator.integer()),
      blob: new Blob([bytes()], { type: "application/x-typia" }),
      blobs: TestRandomGenerator.array(
        () => new Blob([bytes()], { type: "application/octet-stream" }),
      ),
      file: new File([bytes()], `${TestRandomGenerator.string()}.bin`, {
        type: "application/octet-stream",
        lastModified: TestRandomGenerator.integer(1, 1_000_000_000),
      }),
      files: TestRandomGenerator.array(
        () =>
          new File([bytes()], `${TestRandomGenerator.string()}.bin`, {
            type: "text/plain",
            lastModified: TestRandomGenerator.integer(1, 1_000_000_000),
          }),
      ),
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
