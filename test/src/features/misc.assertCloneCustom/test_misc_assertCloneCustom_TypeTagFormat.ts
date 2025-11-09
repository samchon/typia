import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_TypeTagFormat = (): void => _test_misc_assertClone(CustomGuardError)(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)((input) => typia.misc.assertClone<TypeTagFormat>(input, (p) => new CustomGuardError(p)));
