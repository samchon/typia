import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertEqualsFunctionCustom_DynamicComposite =
  _test_functional_assertEqualsFunction(CustomGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => DynamicComposite) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
