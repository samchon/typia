import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleUnion } from "../../structures/TupleUnion";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_TupleUnion = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)((input) => typia.misc.assertPrune<TupleUnion>(input));
