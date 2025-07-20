import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_assertCloneCustom_TypeTagArray = (): void =>
  _test_misc_assertClone(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )((input) =>
    typia.misc.assertClone<TypeTagArray>(input, (p) => new CustomGuardError(p)),
  );
