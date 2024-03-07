import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectUnionExplicit = _test_assertEquals(
  CustomGuardError,
)("ObjectUnionExplicit")<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  typia.assertEquals<ObjectUnionExplicit>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
