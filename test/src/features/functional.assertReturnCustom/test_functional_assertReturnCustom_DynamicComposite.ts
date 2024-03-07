import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_DynamicComposite =
  _test_functional_assertReturn(CustomGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => DynamicComposite) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
