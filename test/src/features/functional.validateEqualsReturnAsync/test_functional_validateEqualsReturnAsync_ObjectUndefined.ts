import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateEqualsReturnAsync_ObjectUndefined = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.validateEqualsReturn(p),
)