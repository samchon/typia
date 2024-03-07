import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TypeTagCustom =
  _test_assertGuardEquals(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )(
    typia.createAssertGuardEquals<TypeTagCustom>(
      (p) => new CustomGuardError(p),
    ),
  );
