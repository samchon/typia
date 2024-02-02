import typia from "typia";

import { _test_http_formData } from "../../../internal/_test_http_formData";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_http_formData_ObjectHttpCommentTag = _test_http_formData(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
  ((input: FormData): typia.Resolved<ObjectHttpCommentTag> => {
    const $number = (typia.http.formData as any).number;
    const $bigint = (typia.http.formData as any).bigint;
    const $string = (typia.http.formData as any).string;
    const output = {
      int: $number(input.get("int")),
      uint64: $bigint(input.get("uint64")),
      uuid: $string(input.get("uuid")),
      items: input.getAll("items").map((elem: any) => $number(elem)),
    };
    return output as any;
  })(input),
);
