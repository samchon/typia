import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_TypeTagPattern =
  _test_misc_assertClone(CustomGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )(
    typia.misc.createAssertClone<TypeTagPattern>(
      (p) => new CustomGuardError(p),
    ),
  );
