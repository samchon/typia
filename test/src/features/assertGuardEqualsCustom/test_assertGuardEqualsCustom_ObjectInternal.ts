import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectInternal = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)((input) => typia.assertGuardEquals<ObjectInternal>(input, (p) => new CustomGuardError(p)));
