import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassGetter } from "../../structures/ClassGetter";

import { TypeGuardError } from "typia";

export const test_assert_ClassGetter = (): void => _test_assert(TypeGuardError)(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.assert<ClassGetter>(input));
