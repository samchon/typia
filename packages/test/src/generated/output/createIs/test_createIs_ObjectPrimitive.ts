import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_createIs_ObjectPrimitive = _test_is(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input: any): input is ObjectPrimitive => {
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    ("txt" === input.extension ||
      "md" === input.extension ||
      "html" === input.extension) &&
    "string" === typeof input.title &&
    "string" === typeof input.body &&
    Array.isArray(input.files) &&
    input.files.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io1(elem),
    ) &&
    "boolean" === typeof input.secret &&
    "string" === typeof input.created_at;
  const $io1 = (input: any): boolean =>
    "string" === typeof input.id &&
    "string" === typeof input.name &&
    "string" === typeof input.extension &&
    "string" === typeof input.url &&
    "string" === typeof input.created_at;
  return "object" === typeof input && null !== input && $io0(input);
});
