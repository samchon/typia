import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assertCustom_ObjectUnionExplicit = _test_assert(
  CustomGuardError,
)("ObjectUnionExplicit")<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  typia.assert<ObjectUnionExplicit>(input, (p) => new CustomGuardError(p)),
);
