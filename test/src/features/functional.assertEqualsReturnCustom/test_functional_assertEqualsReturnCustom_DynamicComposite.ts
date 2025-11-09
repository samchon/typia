import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertEqualsReturnCustom_DynamicComposite =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("DynamicComposite")(
      DynamicComposite,
    )((p: (input: DynamicComposite) => DynamicComposite) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
