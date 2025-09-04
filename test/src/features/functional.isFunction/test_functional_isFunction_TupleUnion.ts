import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_isFunction_TupleUnion = (): void =>
  _test_functional_isFunction("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) => typia.functional.isFunction(p),
  );
