import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_TypeTagLength = (): void => _test_misc_assertClone(CustomGuardError)(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)(typia.misc.createAssertClone<TypeTagLength>((p) => new CustomGuardError(p)));
