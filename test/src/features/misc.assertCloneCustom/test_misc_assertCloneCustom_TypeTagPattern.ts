import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_assertCloneCustom_TypeTagPattern = (): void =>
  _test_misc_assertClone(CustomGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )((input) =>
    typia.misc.assertClone<TypeTagPattern>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
