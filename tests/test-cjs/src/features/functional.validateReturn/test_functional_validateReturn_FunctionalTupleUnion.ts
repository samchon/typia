import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_validateReturn_FunctionalTupleUnion = (): void =>
  _test_functional_validateReturn("FunctionalTupleUnion")(FunctionalTupleUnion)(
    (p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) =>
      typia.functional.validateReturn(p),
  );
