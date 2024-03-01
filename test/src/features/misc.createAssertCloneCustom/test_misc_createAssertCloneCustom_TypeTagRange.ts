import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_createAssertCloneCustom_TypeTagRange =
  _test_misc_assertClone(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )(typia.misc.createAssertClone<TypeTagRange>((p) => new CustomGuardError(p)));
