import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_equalsParametersAsync_TypeTagLength = _test_functional_equalsParametersAsync(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.equalsParameters(p),
)