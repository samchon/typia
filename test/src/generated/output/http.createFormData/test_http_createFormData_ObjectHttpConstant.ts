import typia from "typia";

import { _test_http_formData } from "../../../internal/_test_http_formData";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_http_createFormData_ObjectHttpConstant = _test_http_formData(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)(
  (input: FormData): typia.Resolved<ObjectHttpConstant> => {
    const $boolean = (typia.http.createFormData as any).boolean;
    const $bigint = (typia.http.createFormData as any).bigint;
    const $number = (typia.http.createFormData as any).number;
    const $string = (typia.http.createFormData as any).string;
    const output = {
      boolean: $boolean(input.get("boolean")),
      bigint: $bigint(input.get("bigint")),
      number: $number(input.get("number")),
      string: $string(input.get("string")),
      template: $string(input.get("template")),
    };
    return output as any;
  },
);
