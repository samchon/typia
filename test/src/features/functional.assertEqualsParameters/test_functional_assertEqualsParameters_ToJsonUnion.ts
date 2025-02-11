import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertEqualsParameters_ToJsonUnion =
  _test_functional_assertEqualsParameters(TypeGuardError)("ToJsonUnion")(
    ToJsonUnion,
  )((p: (input: ToJsonUnion) => ToJsonUnion) =>
    typia.functional.assertEqualsParameters(p),
  );
