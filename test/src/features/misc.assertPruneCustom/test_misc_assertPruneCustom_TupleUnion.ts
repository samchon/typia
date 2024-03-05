import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_misc_assertPruneCustom_TupleUnion = _test_misc_assertPrune(
  CustomGuardError,
)("TupleUnion")<TupleUnion>(TupleUnion)((input) =>
  typia.misc.assertPrune<TupleUnion>(input, (p) => new CustomGuardError(p)),
);
