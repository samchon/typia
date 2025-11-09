import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_createAssertCloneCustom_TypeTagLength = (): void =>
  _test_misc_assertClone(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )(
    typia.misc.createAssertClone<TypeTagLength>((p) => new CustomGuardError(p)),
  );
