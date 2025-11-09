import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertParametersCustom_DynamicUnion = (): void =>
  _test_functional_assertParameters(CustomGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => DynamicUnion) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
