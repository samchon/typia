import typia from "typia";

import { _test_http_isFormData } from "../../../internal/_test_http_isFormData";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_createIsFormData_ObjectHttpAtomic =
  _test_http_isFormData("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
    (input: FormData): typia.Resolved<ObjectHttpAtomic> | null => {
      const is = (input: any): input is ObjectHttpAtomic => {
        return (
          "object" === typeof input &&
          null !== input &&
          "boolean" === typeof (input as any).boolean &&
          "bigint" === typeof (input as any).bigint &&
          "number" === typeof (input as any).number &&
          Number.isFinite((input as any).number) &&
          "string" === typeof (input as any).string
        );
      };
      const decode = (input: FormData): typia.Resolved<ObjectHttpAtomic> => {
        const $boolean = (typia.http.createIsFormData as any).boolean;
        const $bigint = (typia.http.createIsFormData as any).bigint;
        const $number = (typia.http.createIsFormData as any).number;
        const $string = (typia.http.createIsFormData as any).string;
        const output = {
          boolean: $boolean(input.get("boolean")),
          bigint: $bigint(input.get("bigint")),
          number: $number(input.get("number")),
          string: $string(input.get("string")),
        };
        return output as any;
      };
      const output = decode(input);
      if (!is(output)) return null;
      return output;
    },
  );
