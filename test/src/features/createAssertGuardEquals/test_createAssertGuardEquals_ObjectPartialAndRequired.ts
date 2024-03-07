import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectPartialAndRequired =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
    typia.createAssertGuardEquals<ObjectPartialAndRequired>(),
  );
