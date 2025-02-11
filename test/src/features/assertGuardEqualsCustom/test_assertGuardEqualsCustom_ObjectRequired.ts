import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectRequired = _test_assertGuardEquals(CustomGuardError)(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.assertGuardEquals<ObjectRequired>(input, (p) => new CustomGuardError(p)));
