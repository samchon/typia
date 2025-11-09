import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_createAssertCloneCustom_DynamicTemplate = (): void =>
  _test_misc_assertClone(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(
    typia.misc.createAssertClone<DynamicTemplate>(
      (p) => new CustomGuardError(p),
    ),
  );
