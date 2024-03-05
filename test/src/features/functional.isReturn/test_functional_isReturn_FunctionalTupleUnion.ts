import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_isReturn_FunctionalTupleUnion =
  _test_functional_isReturn("FunctionalTupleUnion")(FunctionalTupleUnion)(
    (p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) =>
      typia.functional.isReturn(p),
  );
