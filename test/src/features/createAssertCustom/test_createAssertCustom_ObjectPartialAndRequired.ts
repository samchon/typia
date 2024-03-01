import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createAssertCustom_ObjectPartialAndRequired = _test_assert(
  CustomGuardError,
)("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
  ObjectPartialAndRequired,
)(typia.createAssert<ObjectPartialAndRequired>((p) => new CustomGuardError(p)));
