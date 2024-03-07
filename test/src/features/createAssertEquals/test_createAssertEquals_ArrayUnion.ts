import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ArrayUnion = _test_assertEquals(
  TypeGuardError,
)("ArrayUnion")<ArrayUnion>(ArrayUnion)(typia.createAssertEquals<ArrayUnion>());
