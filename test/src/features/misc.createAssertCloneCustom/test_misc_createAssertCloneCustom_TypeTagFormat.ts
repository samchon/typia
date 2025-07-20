import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_createAssertCloneCustom_TypeTagFormat = (): void =>
  _test_misc_assertClone(CustomGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )(
    typia.misc.createAssertClone<TypeTagFormat>((p) => new CustomGuardError(p)),
  );
