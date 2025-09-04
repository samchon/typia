import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateFunction_TupleUnion = (): void =>
  _test_functional_validateFunction("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.validateFunction(p),
  );
