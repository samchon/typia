import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createAssertEqualsCustom_TypeTagCustom = _test_assertEquals(
  CustomGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
  typia.createAssertEquals<TypeTagCustom>((p) => new CustomGuardError(p)),
);
