import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertFunctionCustom_DynamicComposite = (): void =>
  _test_functional_assertFunction(CustomGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => DynamicComposite) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
