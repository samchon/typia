import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_isReturnAsync_ObjectHttpNullable = _test_functional_isReturnAsync(
  "ObjectHttpNullable"
)(ObjectHttpNullable)(
  (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
    typia.functional.isReturn(p),
)