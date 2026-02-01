import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateEqualsParametersAsync_ObjectOptional = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.validateEqualsParameters(p),
)