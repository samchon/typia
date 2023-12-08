import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_assert_TupleRestArray = _test_assert(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)((input) =>
  typia.assert<TupleRestArray>(input),
);
