import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateParametersAsync_ObjectPartial = (): Promise<void> => _test_functional_validateParametersAsync(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.validateParameters(p),
)