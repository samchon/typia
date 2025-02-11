import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_createAssertEqualsCustom_TypeTagRange = _test_assertEquals(
  CustomGuardError,
)("TypeTagRange")<TypeTagRange>(TypeTagRange)(
  typia.createAssertEquals<TypeTagRange>((p) => new CustomGuardError(p)),
);
