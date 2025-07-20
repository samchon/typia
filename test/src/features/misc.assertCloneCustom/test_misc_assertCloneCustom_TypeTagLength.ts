import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_assertCloneCustom_TypeTagLength = (): void =>
  _test_misc_assertClone(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )((input) =>
    typia.misc.assertClone<TypeTagLength>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
