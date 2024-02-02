import typia from "typia";

import { _test_http_formData } from "../../../internal/_test_http_formData";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_http_createFormData_ObjectHttpTypeTag = _test_http_formData(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
  (input: FormData): typia.Resolved<ObjectHttpTypeTag> => {
    const $number = (typia.http.createFormData as any).number;
    const $bigint = (typia.http.createFormData as any).bigint;
    const $string = (typia.http.createFormData as any).string;
    const output = {
      int32: $number(input.get("int32")),
      uint64: $bigint(input.get("uint64")),
      uuid: $string(input.get("uuid")),
      range: input.getAll("range").map((elem: any) => $number(elem)),
      length: input.getAll("length").map((elem: any) => $string(elem)),
    };
    return output as any;
  },
);
