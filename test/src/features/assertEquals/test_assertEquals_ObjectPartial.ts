import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_assertEquals_ObjectPartial = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )((input) => typia.assertEquals<ObjectPartial>(input));
