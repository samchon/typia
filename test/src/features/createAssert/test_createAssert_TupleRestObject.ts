import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { TypeGuardError } from "typia";

export const test_createAssert_TupleRestObject = _test_assert(TypeGuardError)(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)(typia.createAssert<TupleRestObject>());
