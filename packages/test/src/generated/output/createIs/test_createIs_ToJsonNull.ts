import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_createIs_ToJsonNull = _test_is("ToJsonNull")<ToJsonNull>(
  ToJsonNull,
)((input: any): input is ToJsonNull => {
  const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
  return "object" === typeof input && null !== input && $io0(input);
});
