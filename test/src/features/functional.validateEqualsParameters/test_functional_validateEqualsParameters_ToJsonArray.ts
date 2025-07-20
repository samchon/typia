import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateEqualsParameters_ToJsonArray = (): void =>
  _test_functional_validateEqualsParameters("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.validateEqualsParameters(p),
  );
