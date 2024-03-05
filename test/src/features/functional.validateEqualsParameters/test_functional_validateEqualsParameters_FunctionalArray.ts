import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateEqualsParameters_FunctionalArray =
  _test_functional_validateEqualsParameters("FunctionalArray")(FunctionalArray)(
    (p: (input: FunctionalArray) => FunctionalArray) =>
      typia.functional.validateEqualsParameters(p),
  );
