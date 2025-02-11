import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createAssertEqualsCustom_FunctionalArray = _test_assertEquals(
  CustomGuardError,
)("FunctionalArray")<FunctionalArray>(FunctionalArray)(
  typia.createAssertEquals<FunctionalArray>((p) => new CustomGuardError(p)),
);
