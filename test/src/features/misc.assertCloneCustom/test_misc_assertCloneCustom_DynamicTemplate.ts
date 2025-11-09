import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_assertCloneCustom_DynamicTemplate = (): void =>
  _test_misc_assertClone(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) =>
    typia.misc.assertClone<DynamicTemplate>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
