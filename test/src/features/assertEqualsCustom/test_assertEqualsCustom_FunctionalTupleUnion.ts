import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_assertEqualsCustom_FunctionalTupleUnion = _test_assertEquals(
  CustomGuardError,
)("FunctionalTupleUnion")<FunctionalTupleUnion>(FunctionalTupleUnion)((input) =>
  typia.assertEquals<FunctionalTupleUnion>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
