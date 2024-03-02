import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_createAssertCloneCustom_TypeTagPattern =
  _test_misc_assertClone(CustomGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )(
    typia.misc.createAssertClone<TypeTagPattern>(
      (p) => new CustomGuardError(p),
    ),
  );
