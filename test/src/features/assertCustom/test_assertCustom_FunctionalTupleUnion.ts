import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_FunctionalTupleUnion = (): void => _test_assert(CustomGuardError)(
    "FunctionalTupleUnion",
)<FunctionalTupleUnion>(
    FunctionalTupleUnion
)((input) => typia.assert<FunctionalTupleUnion>(input, (p) => new CustomGuardError(p)));
