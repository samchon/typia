import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertEquals_ObjectUnionDouble = _test_assertEquals(
  TypeGuardError,
)("ObjectUnionDouble")<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.assertEquals<ObjectUnionDouble>(input),
);
