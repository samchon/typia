import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { TypeGuardError } from "typia";

export const test_assert_FunctionalArrayUnion = (): void => _test_assert(TypeGuardError)(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(
    FunctionalArrayUnion
)((input) => typia.assert<FunctionalArrayUnion>(input));
