import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_equalsReturnAsync_ArrayRecursiveUnionExplicitPointer = _test_functional_equalsReturnAsync(
  "ArrayRecursiveUnionExplicitPointer"
)(ArrayRecursiveUnionExplicitPointer)(
  (p: (input: ArrayRecursiveUnionExplicitPointer) => Promise<ArrayRecursiveUnionExplicitPointer>) =>
    typia.functional.equalsReturn(p),
)