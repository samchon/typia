import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectGeneric = (): void => _test_assertGuard(TypeGuardError)(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)((input) => typia.assertGuard<ObjectGeneric>(input));
