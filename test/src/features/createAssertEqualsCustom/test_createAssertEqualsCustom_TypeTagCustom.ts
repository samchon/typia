import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TypeTagCustom = _test_assertEquals(
  CustomGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
  typia.createAssertEquals<TypeTagCustom>((p) => new CustomGuardError(p)),
);
