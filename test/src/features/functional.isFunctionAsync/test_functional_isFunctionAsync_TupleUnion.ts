import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_isFunctionAsync_TupleUnion = (): Promise<void> =>
  _test_functional_isFunctionAsync("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => Promise<TupleUnion>) =>
      typia.functional.isFunction(p),
  );
