import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createAssert_ObjectPartialAndRequired = _test_assert(
  TypeGuardError,
)("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
  ObjectPartialAndRequired,
)(typia.createAssert<ObjectPartialAndRequired>());
