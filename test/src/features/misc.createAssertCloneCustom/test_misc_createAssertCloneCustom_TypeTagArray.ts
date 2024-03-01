import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_createAssertCloneCustom_TypeTagArray =
  _test_misc_assertClone(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(typia.misc.createAssertClone<TypeTagArray>((p) => new CustomGuardError(p)));
