import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_assertReturnCustom_DynamicSimple =
  _test_functional_assertReturn(CustomGuardError)("DynamicSimple")(
    DynamicSimple,
  )((p: (input: DynamicSimple) => DynamicSimple) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
