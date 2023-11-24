import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_createAssertPrune_TupleRestArray =
  _test_misc_assertPrune("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    typia.misc.createAssertPrune<TupleRestArray>(),
  );
