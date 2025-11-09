import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_FunctionalPropertyUnion = (): void => _test_assert(CustomGuardError)(
    "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(
    FunctionalPropertyUnion
)(typia.createAssert<FunctionalPropertyUnion>((p) => new CustomGuardError(p)));
