import typia from "typia";

import { _test_http_formData } from "../../../internal/_test_http_formData";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_http_createFormData_ObjectHttpCommentTag =
  _test_http_formData("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )((input: FormData): typia.Resolved<ObjectHttpCommentTag> => {
    const $number = (typia.http.createFormData as any).number;
    const $bigint = (typia.http.createFormData as any).bigint;
    const $string = (typia.http.createFormData as any).string;
    const output = {
      int: $number(input.get("int")),
      uint64: $bigint(input.get("uint64")),
      uuid: $string(input.get("uuid")),
      items: input.getAll("items").map((elem: any) => $number(elem)),
    };
    return output as any;
  });
