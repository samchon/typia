import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_validateReturnAsync_ObjectDate = (): Promise<void> => _test_functional_validateReturnAsync(
  "ObjectDate"
)(ObjectDate)(
  (p: (input: ObjectDate) => Promise<ObjectDate>) =>
    typia.functional.validateReturn(p),
)