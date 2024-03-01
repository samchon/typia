import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_createAssertCloneCustom_TypeTagDefault =
  _test_misc_assertClone(CustomGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )(
    typia.misc.createAssertClone<TypeTagDefault>(
      (p) => new CustomGuardError(p),
    ),
  );
