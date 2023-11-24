import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_prune_TupleRestObject = _test_misc_prune(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input) =>
  typia.misc.prune<TupleRestObject>(input),
);
