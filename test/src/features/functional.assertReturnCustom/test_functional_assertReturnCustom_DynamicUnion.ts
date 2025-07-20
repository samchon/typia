import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertReturnCustom_DynamicUnion = (): void =>
  _test_functional_assertReturn(CustomGuardError)("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
