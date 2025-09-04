import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_equalsFunction_FunctionalPropertyUnion =
  (): void =>
    _test_functional_equalsFunction("FunctionalPropertyUnion")(
      FunctionalPropertyUnion,
    )((p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
      typia.functional.equalsFunction(p),
    );
