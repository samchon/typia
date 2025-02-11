import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createAssertEqualsCustom_TypeTagMatrix = _test_assertEquals(
  CustomGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
  typia.createAssertEquals<TypeTagMatrix>((p) => new CustomGuardError(p)),
);
