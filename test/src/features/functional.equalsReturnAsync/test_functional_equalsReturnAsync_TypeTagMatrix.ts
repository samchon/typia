import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_equalsReturnAsync_TypeTagMatrix = (): Promise<void> => _test_functional_equalsReturnAsync(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.equalsReturn(p),
)