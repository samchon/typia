import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createIs_ArrayAny = (): void =>
  _test_is("ArrayAny")<ArrayAny>(ArrayAny)(typia.createIs<ArrayAny>());
