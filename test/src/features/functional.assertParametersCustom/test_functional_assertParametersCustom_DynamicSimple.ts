import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_assertParametersCustom_DynamicSimple = (): void =>
  _test_functional_assertParameters(CustomGuardError)("DynamicSimple")(
    DynamicSimple,
  )((p: (input: DynamicSimple) => DynamicSimple) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
