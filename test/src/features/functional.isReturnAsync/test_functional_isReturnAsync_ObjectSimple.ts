import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_isReturnAsync_ObjectSimple = _test_functional_isReturnAsync(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.isReturn(p),
)