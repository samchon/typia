import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectHttpArray = _test_assert(TypeGuardError)(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(typia.createAssert<ObjectHttpArray>());
