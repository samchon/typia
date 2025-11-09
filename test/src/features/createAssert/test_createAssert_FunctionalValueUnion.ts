import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_FunctionalValueUnion = (): void => _test_assert(TypeGuardError)(
    "FunctionalValueUnion",
)<FunctionalValueUnion>(
    FunctionalValueUnion
)(typia.createAssert<FunctionalValueUnion>());
