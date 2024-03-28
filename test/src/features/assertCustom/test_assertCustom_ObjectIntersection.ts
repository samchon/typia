import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_assertCustom_ObjectIntersection = _test_assert(
  CustomGuardError,
)("ObjectIntersection")<ObjectIntersection>(ObjectIntersection)((input) =>
  typia.assert<ObjectIntersection>(input, (p) => new CustomGuardError(p)),
);
