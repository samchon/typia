import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_validateReturn_FunctionalObjectUnion =
  _test_functional_validateReturn("FunctionalObjectUnion")(
    FunctionalObjectUnion,
  )((p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
    typia.functional.validateReturn(p),
  );
