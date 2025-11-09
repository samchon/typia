import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectJsonTag = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)((input) => typia.assertGuardEquals<ObjectJsonTag>(input, (p) => new CustomGuardError(p)));
