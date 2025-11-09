import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectSimple = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)((input) => typia.assertGuardEquals<ObjectSimple>(input, (p) => new CustomGuardError(p)));
