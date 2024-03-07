import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleOptional } from "../../structures/TupleOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TupleOptional = _test_misc_assertPrune(
  CustomGuardError,
)("TupleOptional")<TupleOptional>(TupleOptional)((input) =>
  typia.misc.assertPrune<TupleOptional>(input, (p) => new CustomGuardError(p)),
);
