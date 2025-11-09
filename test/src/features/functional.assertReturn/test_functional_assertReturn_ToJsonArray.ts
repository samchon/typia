import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertReturn_ToJsonArray = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.assertReturn(p),
  );
