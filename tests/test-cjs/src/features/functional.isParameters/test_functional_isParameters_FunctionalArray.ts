import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_isParameters_FunctionalArray = (): void =>
  _test_functional_isParameters("FunctionalArray")(FunctionalArray)(
    (p: (input: FunctionalArray) => FunctionalArray) =>
      typia.functional.isParameters(p),
  );
