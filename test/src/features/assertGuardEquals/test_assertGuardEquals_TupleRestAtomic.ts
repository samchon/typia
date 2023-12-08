import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_assertGuardEquals_TupleRestAtomic = _test_assertGuardEquals(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input) =>
  typia.assertGuardEquals<TupleRestAtomic>(input),
);
