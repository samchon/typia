import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_createClone_TupleRestArray = _test_misc_clone(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)(typia.misc.createClone<TupleRestArray>());
