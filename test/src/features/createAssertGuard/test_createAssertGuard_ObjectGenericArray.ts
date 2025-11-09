import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ObjectGenericArray = (): void => _test_assertGuard(TypeGuardError)(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)(typia.createAssertGuard<ObjectGenericArray>());
