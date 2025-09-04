import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertEqualsParametersCustom_DynamicComposite =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "DynamicComposite",
    )(DynamicComposite)((p: (input: DynamicComposite) => DynamicComposite) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
