import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_assertEqualsCustom_TypeTagObjectUnion = _test_assertEquals(
  CustomGuardError,
)("TypeTagObjectUnion")<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
  typia.assertEquals<TypeTagObjectUnion>(input, (p) => new CustomGuardError(p)),
);
