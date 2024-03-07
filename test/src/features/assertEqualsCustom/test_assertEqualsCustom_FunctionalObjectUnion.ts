import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_FunctionalObjectUnion = _test_assertEquals(
  CustomGuardError,
)("FunctionalObjectUnion")<FunctionalObjectUnion>(FunctionalObjectUnion)(
  (input) =>
    typia.assertEquals<FunctionalObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
