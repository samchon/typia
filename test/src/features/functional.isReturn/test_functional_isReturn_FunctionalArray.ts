import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_isReturn_FunctionalArray = (): void =>
  _test_functional_isReturn("FunctionalArray")(FunctionalArray)(
    (p: (input: FunctionalArray) => FunctionalArray) =>
      typia.functional.isReturn(p),
  );
