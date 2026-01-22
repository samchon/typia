import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertParameters_DynamicUnion = (): void =>
  _test_functional_assertParameters(TypeGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => DynamicUnion) =>
    typia.functional.assertParameters(p),
  );
