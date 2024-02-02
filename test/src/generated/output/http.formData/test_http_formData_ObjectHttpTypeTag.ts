import typia from "typia";

import { _test_http_formData } from "../../../internal/_test_http_formData";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_http_formData_ObjectHttpTypeTag = _test_http_formData(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  ((input: FormData): typia.Resolved<ObjectHttpTypeTag> => {
    const $number = (typia.http.formData as any).number;
    const $bigint = (typia.http.formData as any).bigint;
    const $string = (typia.http.formData as any).string;
    const output = {
      int32: $number(input.get("int32")),
      uint64: $bigint(input.get("uint64")),
      uuid: $string(input.get("uuid")),
      range: input.getAll("range").map((elem: any) => $number(elem)),
      length: input.getAll("length").map((elem: any) => $string(elem)),
    };
    return output as any;
  })(input),
);
