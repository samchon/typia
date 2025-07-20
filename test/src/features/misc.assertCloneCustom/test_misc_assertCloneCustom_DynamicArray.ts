import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_misc_assertCloneCustom_DynamicArray = (): void =>
  _test_misc_assertClone(CustomGuardError)("DynamicArray")<DynamicArray>(
    DynamicArray,
  )((input) =>
    typia.misc.assertClone<DynamicArray>(input, (p) => new CustomGuardError(p)),
  );
