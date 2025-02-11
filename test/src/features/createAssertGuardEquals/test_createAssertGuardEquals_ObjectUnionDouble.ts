import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssertGuardEquals_ObjectUnionDouble =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.createAssertGuardEquals<ObjectUnionDouble>(),
  );
