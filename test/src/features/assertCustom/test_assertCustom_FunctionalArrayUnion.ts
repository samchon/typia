import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_FunctionalArrayUnion = (): void => _test_assert(CustomGuardError)(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(
    FunctionalArrayUnion
)((input) => typia.assert<FunctionalArrayUnion>(input, (p) => new CustomGuardError(p)));
