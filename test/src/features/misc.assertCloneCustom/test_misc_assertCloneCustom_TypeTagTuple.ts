import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_TypeTagTuple = (): void => _test_misc_assertClone(CustomGuardError)(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)((input) => typia.misc.assertClone<TypeTagTuple>(input, (p) => new CustomGuardError(p)));
