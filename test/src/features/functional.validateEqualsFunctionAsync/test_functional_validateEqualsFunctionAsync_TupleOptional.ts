import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateEqualsFunctionAsync_TupleOptional = _test_functional_validateEqualsFunctionAsync(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.validateEqualsFunction(p),
)