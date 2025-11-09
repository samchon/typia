import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_TypeTagLength = (): void => _test_misc_assertClone(TypeGuardError)(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)(typia.misc.createAssertClone<TypeTagLength>());
