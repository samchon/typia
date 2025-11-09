import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateReturnAsync_TupleOptional = (): Promise<void> => _test_functional_validateReturnAsync(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.validateReturn(p),
)