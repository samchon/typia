import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertParameters_ToJsonArray =
  _test_functional_assertParameters(TypeGuardError)("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.assertParameters(p),
  );
