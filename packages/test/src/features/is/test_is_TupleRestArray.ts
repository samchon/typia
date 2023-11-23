import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_is_TupleRestArray = _test_is(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)((input) => typia.is<TupleRestArray>(input));
