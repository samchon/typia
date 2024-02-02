import typia from "typia";

import { _test_http_formData } from "../../../internal/_test_http_formData";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_http_createFormData_ObjectHttpArray = _test_http_formData(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  (input: FormData): typia.Resolved<ObjectHttpArray> => {
    const $boolean = (typia.http.createFormData as any).boolean;
    const $bigint = (typia.http.createFormData as any).bigint;
    const $number = (typia.http.createFormData as any).number;
    const $string = (typia.http.createFormData as any).string;
    const output = {
      booleans: input.getAll("booleans").map((elem: any) => $boolean(elem)),
      bigints: input.getAll("bigints").map((elem: any) => $bigint(elem)),
      numbers: input.getAll("numbers").map((elem: any) => $number(elem)),
      strings: input.getAll("strings").map((elem: any) => $string(elem)),
      templates: input.getAll("templates").map((elem: any) => $string(elem)),
    };
    return output as any;
  },
);
