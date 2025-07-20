import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_misc_assertCloneCustom_DynamicTree = (): void =>
  _test_misc_assertClone(CustomGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )((input) =>
    typia.misc.assertClone<DynamicTree>(input, (p) => new CustomGuardError(p)),
  );
