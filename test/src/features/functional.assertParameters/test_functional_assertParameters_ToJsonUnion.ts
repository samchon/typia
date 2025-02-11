import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertParameters_ToJsonUnion =
  _test_functional_assertParameters(TypeGuardError)("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.assertParameters(p),
  );
