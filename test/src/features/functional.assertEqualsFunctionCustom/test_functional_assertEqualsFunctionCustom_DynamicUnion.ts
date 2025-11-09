import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertEqualsFunctionCustom_DynamicUnion =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("DynamicUnion")(
      DynamicUnion,
    )((p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
