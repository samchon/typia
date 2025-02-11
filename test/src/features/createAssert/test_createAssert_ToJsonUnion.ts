import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssert_ToJsonUnion = _test_assert(TypeGuardError)(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)(typia.createAssert<ToJsonUnion>());
