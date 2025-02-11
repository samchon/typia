import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_equalsParametersAsync_TypeTagMatrix = _test_functional_equalsParametersAsync(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.equalsParameters(p),
)