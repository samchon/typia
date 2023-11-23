import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssert_TupleRestObject = _test_assert(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)(typia.createAssert<TupleRestObject>());
