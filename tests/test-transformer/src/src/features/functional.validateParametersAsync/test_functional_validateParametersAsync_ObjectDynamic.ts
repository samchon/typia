import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_validateParametersAsync_ObjectDynamic = (): Promise<void> => _test_functional_validateParametersAsync(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
    typia.functional.validateParameters(p),
)