import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_isParametersAsync_TupleUnion = (): Promise<void> => _test_functional_isParametersAsync(
  "TupleUnion"
)(TupleUnion)(
  (p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.isParameters(p),
)