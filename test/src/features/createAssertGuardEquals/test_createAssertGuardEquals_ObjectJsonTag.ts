import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectJsonTag =
  _test_assertGuardEquals(TypeGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )(typia.createAssertGuardEquals<ObjectJsonTag>());
