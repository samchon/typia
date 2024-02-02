import typia from "typia";

import { _test_http_formData } from "../../../internal/_test_http_formData";
import { ObjectHttpFormData } from "../../../structures/ObjectHttpFormData";

export const test_http_formData_ObjectHttpFormData = _test_http_formData(
  "ObjectHttpFormData",
)<ObjectHttpFormData>(ObjectHttpFormData)((input) =>
  ((input: FormData): typia.Resolved<ObjectHttpFormData> => {
    const $string = (typia.http.formData as any).string;
    const $number = (typia.http.formData as any).number;
    const $blob = (typia.http.formData as any).blob;
    const $file = (typia.http.formData as any).file;
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
  })(input),
);
