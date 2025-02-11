import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createAssertEquals_ObjectHttpTypeTag = _test_assertEquals(
  TypeGuardError,
)("ObjectHttpTypeTag")<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
  typia.createAssertEquals<ObjectHttpTypeTag>(),
);
