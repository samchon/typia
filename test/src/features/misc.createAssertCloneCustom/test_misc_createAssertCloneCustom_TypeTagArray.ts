import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_TypeTagArray = (): void => _test_misc_assertClone(CustomGuardError)(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.misc.createAssertClone<TypeTagArray>((p) => new CustomGuardError(p)));
