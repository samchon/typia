import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_equalsFunction_TupleUnion = (): void =>
  _test_functional_equalsFunction("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.equalsFunction(p),
  );
