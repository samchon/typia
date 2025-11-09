import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectInternal = (): void => _test_assertGuard(TypeGuardError)(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)((input) => typia.assertGuard<ObjectInternal>(input));
