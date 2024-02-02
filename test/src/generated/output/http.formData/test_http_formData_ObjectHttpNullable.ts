import typia from "typia";

import { _test_http_formData } from "../../../internal/_test_http_formData";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_http_formData_ObjectHttpNullable = _test_http_formData(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  ((input: FormData): typia.Resolved<ObjectHttpNullable> => {
    const $boolean = (typia.http.formData as any).boolean;
    const $bigint = (typia.http.formData as any).bigint;
    const $number = (typia.http.formData as any).number;
    const $string = (typia.http.formData as any).string;
    const $array = (typia.http.formData as any).array;
    const output = {
      boolean: $boolean(input.get("boolean")),
      bigint: $bigint(input.get("bigint")),
      number: $number(input.get("number")),
      string: $string(input.get("string")),
      constantBoolean: $boolean(input.get("constantBoolean")),
      constantBigint: $bigint(input.get("constantBigint")),
      constantNumber: $number(input.get("constantNumber")),
      constantString: $string(input.get("constantString")),
      nullableArray: $array(
        input.getAll("nullableArray").map((elem: any) => $number(elem)),
        null,
      ),
    };
    return output as any;
  })(input),
);
