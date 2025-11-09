import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_validateParametersAsync_ObjectDate = (): Promise<void> => _test_functional_validateParametersAsync(
  "ObjectDate"
)(ObjectDate)(
  (p: (input: ObjectDate) => Promise<ObjectDate>) =>
    typia.functional.validateParameters(p),
)