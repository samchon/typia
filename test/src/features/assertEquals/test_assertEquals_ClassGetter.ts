import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassGetter } from "../../structures/ClassGetter";

import { TypeGuardError } from "typia";

export const test_assertEquals_ClassGetter = _test_assertEquals(TypeGuardError)(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.assertEquals<ClassGetter>(input));
