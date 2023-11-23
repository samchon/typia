import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_validate_TupleRestAtomic = _test_validate(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input) =>
  typia.validate<TupleRestAtomic>(input),
);
