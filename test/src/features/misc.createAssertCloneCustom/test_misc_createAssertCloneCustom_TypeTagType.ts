import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_createAssertCloneCustom_TypeTagType =
  _test_misc_assertClone(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )(typia.misc.createAssertClone<TypeTagType>((p) => new CustomGuardError(p)));
