import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_is_TupleRestObject = _test_is(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input) =>
  typia.is<TupleRestObject>(input),
);
