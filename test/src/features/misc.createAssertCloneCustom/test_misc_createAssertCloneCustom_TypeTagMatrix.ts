import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_createAssertCloneCustom_TypeTagMatrix = (): void =>
  _test_misc_assertClone(CustomGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )(
    typia.misc.createAssertClone<TypeTagMatrix>((p) => new CustomGuardError(p)),
  );
