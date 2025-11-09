import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_equalsParametersAsync_TypeTagPattern = (): Promise<void> => _test_functional_equalsParametersAsync(
  "TypeTagPattern"
)(TypeTagPattern)(
  (p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
    typia.functional.equalsParameters(p),
)