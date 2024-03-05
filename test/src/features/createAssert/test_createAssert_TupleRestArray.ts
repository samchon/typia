import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssert_TupleRestArray = _test_assert(TypeGuardError)(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)(typia.createAssert<TupleRestArray>());
