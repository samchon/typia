import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_isParametersAsync_TupleOptional = (): Promise<void> => _test_functional_isParametersAsync(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.isParameters(p),
)