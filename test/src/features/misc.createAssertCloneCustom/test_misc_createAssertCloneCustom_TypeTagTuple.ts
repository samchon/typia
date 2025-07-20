import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createAssertCloneCustom_TypeTagTuple = (): void =>
  _test_misc_assertClone(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )(typia.misc.createAssertClone<TypeTagTuple>((p) => new CustomGuardError(p)));
