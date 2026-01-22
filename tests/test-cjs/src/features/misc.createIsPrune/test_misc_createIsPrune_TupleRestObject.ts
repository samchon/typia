import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_createIsPrune_TupleRestObject = (): void =>
  _test_misc_isPrune("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    typia.misc.createIsPrune<TupleRestObject>(),
  );
