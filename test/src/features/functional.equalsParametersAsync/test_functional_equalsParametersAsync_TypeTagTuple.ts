import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_equalsParametersAsync_TypeTagTuple = (): Promise<void> => _test_functional_equalsParametersAsync(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.equalsParameters(p),
)