import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_assertGuard_ObjectJsonTag = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )((input) => typia.assertGuard<ObjectJsonTag>(input));
