import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_assertGuardEqualsCustom_TypeTagTypeUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "TypeTagTypeUnion",
  )<TypeTagTypeUnion>(TypeTagTypeUnion)((input) =>
    typia.assertGuardEquals<TypeTagTypeUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
