import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ClassGetter = (): void => _test_assertEquals(CustomGuardError)(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.assertEquals<ClassGetter>(input, (p) => new CustomGuardError(p)));
