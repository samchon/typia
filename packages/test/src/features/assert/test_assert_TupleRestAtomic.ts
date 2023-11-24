import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_assert_TupleRestAtomic = _test_assert(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input) =>
  typia.assert<TupleRestAtomic>(input),
);
