import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_equals_TupleRestAtomic = _test_equals(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input) =>
  typia.equals<TupleRestAtomic>(input),
);
