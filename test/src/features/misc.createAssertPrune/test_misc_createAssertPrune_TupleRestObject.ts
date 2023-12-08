import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_createAssertPrune_TupleRestObject =
  _test_misc_assertPrune("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    typia.misc.createAssertPrune<TupleRestObject>(),
  );
