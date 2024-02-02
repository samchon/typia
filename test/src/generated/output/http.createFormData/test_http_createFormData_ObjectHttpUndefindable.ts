import typia from "typia";

import { _test_http_formData } from "../../../internal/_test_http_formData";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_createFormData_ObjectHttpUndefindable =
  _test_http_formData("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input: FormData): typia.Resolved<ObjectHttpUndefindable> => {
    const $boolean = (typia.http.createFormData as any).boolean;
    const $bigint = (typia.http.createFormData as any).bigint;
    const $number = (typia.http.createFormData as any).number;
    const $string = (typia.http.createFormData as any).string;
    const output = {
      boolean: $boolean(input.get("boolean")) ?? undefined,
      bigint: $bigint(input.get("bigint")) ?? undefined,
      number: $number(input.get("number")) ?? undefined,
      string: $string(input.get("string")) ?? undefined,
      constantBoolean: $boolean(input.get("constantBoolean")) ?? undefined,
      constantBigint: $bigint(input.get("constantBigint")) ?? undefined,
      constantNumber: $number(input.get("constantNumber")) ?? undefined,
      constantString: $string(input.get("constantString")) ?? undefined,
    };
    return output as any;
  });
