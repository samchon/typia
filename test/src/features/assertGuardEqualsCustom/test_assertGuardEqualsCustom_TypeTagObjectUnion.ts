import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_assertGuardEqualsCustom_TypeTagObjectUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.assertGuardEquals<TypeTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
