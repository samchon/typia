import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_assertCloneCustom_TypeTagTuple = (): void =>
  _test_misc_assertClone(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )((input) =>
    typia.misc.assertClone<TypeTagTuple>(input, (p) => new CustomGuardError(p)),
  );
