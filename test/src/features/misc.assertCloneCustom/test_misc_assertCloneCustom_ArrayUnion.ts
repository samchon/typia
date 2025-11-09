import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_assertCloneCustom_ArrayUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)("ArrayUnion")<ArrayUnion>(
    ArrayUnion,
  )((input) =>
    typia.misc.assertClone<ArrayUnion>(input, (p) => new CustomGuardError(p)),
  );
