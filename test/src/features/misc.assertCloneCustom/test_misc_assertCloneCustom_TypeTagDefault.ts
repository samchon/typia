import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_assertCloneCustom_TypeTagDefault =
  _test_misc_assertClone(CustomGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )((input) =>
    typia.misc.assertClone<TypeTagDefault>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
