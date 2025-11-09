import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_equalsFunctionAsync_TupleUnion =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("TupleUnion")(TupleUnion)(
      (p: (input: TupleUnion) => Promise<TupleUnion>) =>
        typia.functional.equalsFunction(p),
    );
