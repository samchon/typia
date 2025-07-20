import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertEqualsParameters_ToJsonArray = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("ToJsonArray")(
    ToJsonArray,
  )((p: (input: ToJsonArray) => ToJsonArray) =>
    typia.functional.assertEqualsParameters(p),
  );
