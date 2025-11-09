import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_validateReturnAsync_FunctionalArrayUnion = (): Promise<void> => _test_functional_validateReturnAsync(
  "FunctionalArrayUnion"
)(FunctionalArrayUnion)(
  (p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
    typia.functional.validateReturn(p),
)