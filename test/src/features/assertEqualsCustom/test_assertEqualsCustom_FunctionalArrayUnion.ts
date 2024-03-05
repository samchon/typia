import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_assertEqualsCustom_FunctionalArrayUnion = _test_assertEquals(
  CustomGuardError,
)("FunctionalArrayUnion")<FunctionalArrayUnion>(FunctionalArrayUnion)((input) =>
  typia.assertEquals<FunctionalArrayUnion>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
