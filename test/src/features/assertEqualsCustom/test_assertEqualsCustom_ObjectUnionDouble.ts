import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertEqualsCustom_ObjectUnionDouble = _test_assertEquals(
  CustomGuardError,
)("ObjectUnionDouble")<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.assertEquals<ObjectUnionDouble>(input, (p) => new CustomGuardError(p)),
);
