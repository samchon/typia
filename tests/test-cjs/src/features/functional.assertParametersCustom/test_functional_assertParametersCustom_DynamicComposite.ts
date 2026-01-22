import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertParametersCustom_DynamicComposite =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("DynamicComposite")(
      DynamicComposite,
    )((p: (input: DynamicComposite) => DynamicComposite) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
