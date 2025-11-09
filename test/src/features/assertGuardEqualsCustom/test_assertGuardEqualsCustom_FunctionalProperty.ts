import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_FunctionalProperty = (): void => _test_assertGuardEquals(CustomGuardError)(
    "FunctionalProperty",
)<FunctionalProperty>(
    FunctionalProperty
)((input) => typia.assertGuardEquals<FunctionalProperty>(input, (p) => new CustomGuardError(p)));
