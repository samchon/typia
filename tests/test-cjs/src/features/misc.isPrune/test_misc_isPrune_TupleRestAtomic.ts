import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_isPrune_TupleRestAtomic = (): void =>
  _test_misc_isPrune("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
    (input) => typia.misc.isPrune<TupleRestAtomic>(input),
  );
