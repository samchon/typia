import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

import { TypeGuardError } from "typia";

export const test_assert_FunctionalTupleUnion = _test_assert(TypeGuardError)(
    "FunctionalTupleUnion",
)<FunctionalTupleUnion>(
    FunctionalTupleUnion
)((input) => typia.assert<FunctionalTupleUnion>(input));
