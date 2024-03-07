import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { TypeGuardError } from "typia";

export const test_assertEquals_ObjectPartial = _test_assertEquals(
  TypeGuardError,
)("ObjectPartial")<ObjectPartial>(ObjectPartial)((input) =>
  typia.assertEquals<ObjectPartial>(input),
);
