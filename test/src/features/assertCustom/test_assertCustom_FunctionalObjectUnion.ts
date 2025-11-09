import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_FunctionalObjectUnion = (): void => _test_assert(CustomGuardError)(
    "FunctionalObjectUnion",
)<FunctionalObjectUnion>(
    FunctionalObjectUnion
)((input) => typia.assert<FunctionalObjectUnion>(input, (p) => new CustomGuardError(p)));
