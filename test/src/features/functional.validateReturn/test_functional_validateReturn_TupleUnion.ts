import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateReturn_TupleUnion =
  _test_functional_validateReturn("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.validateReturn(p),
  );
