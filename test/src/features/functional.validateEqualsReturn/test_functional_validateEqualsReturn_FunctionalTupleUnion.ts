import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_validateEqualsReturn_FunctionalTupleUnion =
  (): void =>
    _test_functional_validateEqualsReturn("FunctionalTupleUnion")(
      FunctionalTupleUnion,
    )((p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) =>
      typia.functional.validateEqualsReturn(p),
    );
