import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_validateFunctionAsync_ObjectDate = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectDate"
)(ObjectDate)(
  (p: (input: ObjectDate) => Promise<ObjectDate>) =>
    typia.functional.validateFunction(p),
)