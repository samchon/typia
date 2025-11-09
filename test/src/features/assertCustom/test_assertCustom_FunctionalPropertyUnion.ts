import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_FunctionalPropertyUnion = (): void => _test_assert(CustomGuardError)(
    "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(
    FunctionalPropertyUnion
)((input) => typia.assert<FunctionalPropertyUnion>(input, (p) => new CustomGuardError(p)));
