import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_assertGuardEquals_ObjectPartialAndRequired =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.assertGuardEquals<ObjectPartialAndRequired>(input),
  );
