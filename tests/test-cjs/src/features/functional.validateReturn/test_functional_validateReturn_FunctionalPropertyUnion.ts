import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_validateReturn_FunctionalPropertyUnion =
  (): void =>
    _test_functional_validateReturn("FunctionalPropertyUnion")(
      FunctionalPropertyUnion,
    )((p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
      typia.functional.validateReturn(p),
    );
