import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateParametersAsync_ObjectDescription = (): Promise<void> => _test_functional_validateParametersAsync(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
    typia.functional.validateParameters(p),
)