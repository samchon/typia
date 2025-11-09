import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertFunction_ToJsonArray = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.assertFunction(p),
  );
