import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_DynamicComposite =
  _test_functional_assertParameters(CustomGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => DynamicComposite) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
