import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateEqualsParametersAsync_ObjectDescription = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
    typia.functional.validateEqualsParameters(p),
)