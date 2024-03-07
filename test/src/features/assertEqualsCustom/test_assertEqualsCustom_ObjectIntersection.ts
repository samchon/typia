import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectIntersection = _test_assertEquals(
  CustomGuardError,
)("ObjectIntersection")<ObjectIntersection>(ObjectIntersection)((input) =>
  typia.assertEquals<ObjectIntersection>(input, (p) => new CustomGuardError(p)),
);
