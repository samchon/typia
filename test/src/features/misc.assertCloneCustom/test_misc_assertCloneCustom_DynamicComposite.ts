import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_assertCloneCustom_DynamicComposite = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "DynamicComposite",
  )<DynamicComposite>(DynamicComposite)((input) =>
    typia.misc.assertClone<DynamicComposite>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
