import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_assertEquals_ObjectPartialAndRequired = _test_assertEquals(
  TypeGuardError,
)("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
  ObjectPartialAndRequired,
)((input) => typia.assertEquals<ObjectPartialAndRequired>(input));
