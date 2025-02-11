import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssert_ArrayUnion = _test_assert(TypeGuardError)(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)(typia.createAssert<ArrayUnion>());
