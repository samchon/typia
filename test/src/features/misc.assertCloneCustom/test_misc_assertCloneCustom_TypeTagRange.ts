import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_TypeTagRange = (): void => _test_misc_assertClone(CustomGuardError)(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((input) => typia.misc.assertClone<TypeTagRange>(input, (p) => new CustomGuardError(p)));
