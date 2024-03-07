import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ObjectPartialAndRequired =
  _test_misc_assertClone(TypeGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
    typia.misc.createAssertClone<ObjectPartialAndRequired>(),
  );
