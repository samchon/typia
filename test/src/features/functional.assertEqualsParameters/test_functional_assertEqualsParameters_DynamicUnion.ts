import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_DynamicUnion =
  _test_functional_assertEqualsParameters(TypeGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => DynamicUnion) =>
    typia.functional.assertEqualsParameters(p),
  );
