import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleUnion } from "../../structures/TupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TupleUnion = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)((input) => typia.misc.assertPrune<TupleUnion>(input, (p) => new CustomGuardError(p)));
