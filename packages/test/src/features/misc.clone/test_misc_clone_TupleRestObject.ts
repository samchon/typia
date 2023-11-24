import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_clone_TupleRestObject = _test_misc_clone(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input) =>
  typia.misc.clone<TupleRestObject>(input),
);
