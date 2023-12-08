import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createAssert_ArrayAny = _test_assert("ArrayAny")<ArrayAny>(
  ArrayAny,
)(typia.createAssert<ArrayAny>());
