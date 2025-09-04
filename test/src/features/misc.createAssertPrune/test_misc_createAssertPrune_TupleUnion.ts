import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_misc_createAssertPrune_TupleUnion = (): void =>
  _test_misc_assertPrune(TypeGuardError)("TupleUnion")<TupleUnion>(TupleUnion)(
    typia.misc.createAssertPrune<TupleUnion>(),
  );
