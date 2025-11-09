import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateParametersAsync_TupleUnion = (): Promise<void> => _test_functional_validateParametersAsync(
  "TupleUnion"
)(TupleUnion)(
  (p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.validateParameters(p),
)