import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_assertEqualsCustom_TypeTagMatrix = _test_assertEquals(
  CustomGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.assertEquals<TypeTagMatrix>(input, (p) => new CustomGuardError(p)),
);
