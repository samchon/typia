import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_isReturnAsync_ObjectPrimitive = _test_functional_isReturnAsync(
  "ObjectPrimitive"
)(ObjectPrimitive)(
  (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
    typia.functional.isReturn(p),
)