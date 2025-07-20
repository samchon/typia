import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertEqualsReturnCustom_DynamicUnion = (): void =>
  _test_functional_assertEqualsReturn(CustomGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => DynamicUnion) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
