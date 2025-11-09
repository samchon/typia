import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectPartialAndRequired = (): void => _test_assert(CustomGuardError)(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)(typia.createAssert<ObjectPartialAndRequired>((p) => new CustomGuardError(p)));
