import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createAssertGuardEqualsCustom_TypeTagTypeUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "TypeTagTypeUnion",
  )<TypeTagTypeUnion>(TypeTagTypeUnion)(
    typia.createAssertGuardEquals<TypeTagTypeUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
