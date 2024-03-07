import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_DynamicComposite =
  _test_functional_assertParametersAsync(TypeGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.assertParameters(p),
  );
