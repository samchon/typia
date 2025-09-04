import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateFunctionAsync_TupleUnion =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("TupleUnion")(TupleUnion)(
      (p: (input: TupleUnion) => Promise<TupleUnion>) =>
        typia.functional.validateFunction(p),
    );
