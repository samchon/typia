import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_isReturnAsync_TypeTagAtomicUnion = (): Promise<void> => _test_functional_isReturnAsync(
  "TypeTagAtomicUnion"
)(TypeTagAtomicUnion)(
  (p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
    typia.functional.isReturn(p),
)