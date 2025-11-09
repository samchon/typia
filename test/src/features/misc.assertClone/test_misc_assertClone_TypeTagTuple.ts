import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_TypeTagTuple = (): void => _test_misc_assertClone(TypeGuardError)(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)((input) => typia.misc.assertClone<TypeTagTuple>(input));
