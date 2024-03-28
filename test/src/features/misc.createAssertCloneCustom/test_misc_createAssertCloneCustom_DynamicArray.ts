import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_misc_createAssertCloneCustom_DynamicArray =
  _test_misc_assertClone(CustomGuardError)("DynamicArray")<DynamicArray>(
    DynamicArray,
  )(typia.misc.createAssertClone<DynamicArray>((p) => new CustomGuardError(p)));
