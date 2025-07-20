import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_misc_assertCloneCustom_DynamicSimple = (): void =>
  _test_misc_assertClone(CustomGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )((input) =>
    typia.misc.assertClone<DynamicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
