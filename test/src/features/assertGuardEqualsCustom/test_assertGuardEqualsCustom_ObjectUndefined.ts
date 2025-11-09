import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectUndefined = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)((input) => typia.assertGuardEquals<ObjectUndefined>(input, (p) => new CustomGuardError(p)));
