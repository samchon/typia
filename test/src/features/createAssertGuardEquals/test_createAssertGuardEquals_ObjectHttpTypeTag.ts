import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createAssertGuardEquals_ObjectHttpTypeTag =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
    typia.createAssertGuardEquals<ObjectHttpTypeTag>(),
  );
