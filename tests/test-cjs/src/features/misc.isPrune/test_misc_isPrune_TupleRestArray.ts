import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_isPrune_TupleRestArray = (): void =>
  _test_misc_isPrune("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    (input) => typia.misc.isPrune<TupleRestArray>(input),
  );
