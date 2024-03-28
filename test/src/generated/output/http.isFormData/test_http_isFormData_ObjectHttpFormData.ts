import typia from "typia";

import { _test_http_isFormData } from "../../../internal/_test_http_isFormData";
import { ObjectHttpFormData } from "../../../structures/ObjectHttpFormData";

export const test_http_isFormData_ObjectHttpFormData = _test_http_isFormData(
  "ObjectHttpFormData",
)<ObjectHttpFormData>(ObjectHttpFormData)((input) =>
  ((input: FormData): import("typia").Resolved<ObjectHttpFormData> | null => {
    const is = (input: any): input is ObjectHttpFormData => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          input.id,
        ) &&
        "number" === typeof input.number &&
        Number.isFinite(input.number) &&
        Array.isArray(input.integers) &&
        input.integers.every(
          (elem: any) =>
            "number" === typeof elem &&
            Math.floor(elem) === elem &&
            -2147483648 <= elem &&
            elem <= 2147483647,
        ) &&
        input.blob instanceof Blob &&
        Array.isArray(input.blobs) &&
        input.blobs.every((elem: any) => elem instanceof Blob) &&
        input.file instanceof File &&
        Array.isArray(input.files) &&
        input.files.every((elem: any) => elem instanceof File);
      return "object" === typeof input && null !== input && $io0(input);
    };
    const decode = (
      input: FormData,
    ): import("typia").Resolved<ObjectHttpFormData> => {
      const $string = (typia.http.isFormData as any).string;
      const $number = (typia.http.isFormData as any).number;
      const $blob = (typia.http.isFormData as any).blob;
      const $file = (typia.http.isFormData as any).file;
      const output = {
        id: $string(input.get("id")),
        number: $number(input.get("number")),
        integers: input.getAll("integers").map((elem: any) => $number(elem)),
        blob: $blob(input.get("blob")),
        blobs: input.getAll("blobs").map((elem: any) => $blob(elem)),
        file: $file(input.get("file")),
        files: input.getAll("files").map((elem: any) => $file(elem)),
      };
      return output as any;
    };
    const output = decode(input);
    if (!is(output)) return null;
    return output;
  })(input),
);
