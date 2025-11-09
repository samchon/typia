import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ObjectPartialAndRequired = (): void => _test_assertGuard(TypeGuardError)(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)(typia.createAssertGuard<ObjectPartialAndRequired>());
