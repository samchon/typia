import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_assertEquals_ObjectInternal = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectInternal")<ObjectInternal>(
    ObjectInternal,
  )((input) => typia.assertEquals<ObjectInternal>(input));
