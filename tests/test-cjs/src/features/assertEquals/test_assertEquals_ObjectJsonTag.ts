import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_assertEquals_ObjectJsonTag = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )((input) => typia.assertEquals<ObjectJsonTag>(input));
