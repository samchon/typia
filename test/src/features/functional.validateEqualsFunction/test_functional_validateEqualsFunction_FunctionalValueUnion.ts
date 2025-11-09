import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_validateEqualsFunction_FunctionalValueUnion =
  (): void =>
    _test_functional_validateEqualsFunction("FunctionalValueUnion")(
      FunctionalValueUnion,
    )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
      typia.functional.validateEqualsFunction(p),
    );
