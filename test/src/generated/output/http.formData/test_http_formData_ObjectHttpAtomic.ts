import typia from "typia";

import { _test_http_formData } from "../../../internal/_test_http_formData";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_formData_ObjectHttpAtomic = _test_http_formData(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  ((input: FormData): typia.Resolved<ObjectHttpAtomic> => {
    const $boolean = (typia.http.formData as any).boolean;
    const $bigint = (typia.http.formData as any).bigint;
    const $number = (typia.http.formData as any).number;
    const $string = (typia.http.formData as any).string;
    const output = {
      boolean: $boolean(input.get("boolean")),
      bigint: $bigint(input.get("bigint")),
      number: $number(input.get("number")),
      string: $string(input.get("string")),
    };
    return output as any;
  })(input),
);
