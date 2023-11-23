import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_equals_TupleRestObject = _test_equals(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input) =>
  typia.equals<TupleRestObject>(input),
);
