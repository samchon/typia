import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createAssertEquals_ObjectPartialAndRequired = (): void =>
  _test_assertEquals(TypeGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
    typia.createAssertEquals<ObjectPartialAndRequired>(),
  );
