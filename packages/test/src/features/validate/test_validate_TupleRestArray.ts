import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_validate_TupleRestArray = _test_validate(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)((input) =>
  typia.validate<TupleRestArray>(input),
);
