import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_equalsParameters_FunctionalArray = (): void =>
  _test_functional_equalsParameters("FunctionalArray")(FunctionalArray)(
    (p: (input: FunctionalArray) => FunctionalArray) =>
      typia.functional.equalsParameters(p),
  );
