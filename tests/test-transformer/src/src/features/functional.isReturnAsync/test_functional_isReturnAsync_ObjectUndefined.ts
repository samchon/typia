import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_isReturnAsync_ObjectUndefined = (): Promise<void> => _test_functional_isReturnAsync(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.isReturn(p),
)