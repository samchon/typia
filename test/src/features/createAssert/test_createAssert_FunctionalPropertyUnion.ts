import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_FunctionalPropertyUnion = (): void => _test_assert(TypeGuardError)(
    "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(
    FunctionalPropertyUnion
)(typia.createAssert<FunctionalPropertyUnion>());
