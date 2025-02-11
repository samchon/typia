import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_FunctionalProperty = _test_assert(CustomGuardError)(
    "FunctionalProperty",
)<FunctionalProperty>(
    FunctionalProperty
)((input) => typia.assert<FunctionalProperty>(input, (p) => new CustomGuardError(p)));
