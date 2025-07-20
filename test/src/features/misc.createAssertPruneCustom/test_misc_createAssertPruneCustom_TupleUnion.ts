import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_misc_createAssertPruneCustom_TupleUnion = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TupleUnion")<TupleUnion>(
    TupleUnion,
  )(typia.misc.createAssertPrune<TupleUnion>((p) => new CustomGuardError(p)));
