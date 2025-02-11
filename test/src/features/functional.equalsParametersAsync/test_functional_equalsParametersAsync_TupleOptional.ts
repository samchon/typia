import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_equalsParametersAsync_TupleOptional = _test_functional_equalsParametersAsync(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.equalsParameters(p),
)