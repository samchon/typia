import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_TypeTagCustom = (): void => _test_misc_assertClone(CustomGuardError)(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)((input) => typia.misc.assertClone<TypeTagCustom>(input, (p) => new CustomGuardError(p)));
