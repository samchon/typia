import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateEqualsFunctionAsync_TupleUnion = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "TupleUnion"
)(TupleUnion)(
  (p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.validateEqualsFunction(p),
)