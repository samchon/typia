import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_assertCloneCustom_TypeTagType = (): void =>
  _test_misc_assertClone(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )((input) =>
    typia.misc.assertClone<TypeTagType>(input, (p) => new CustomGuardError(p)),
  );
