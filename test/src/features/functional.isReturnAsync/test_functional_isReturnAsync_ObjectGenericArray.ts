import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_isReturnAsync_ObjectGenericArray = _test_functional_isReturnAsync(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
    typia.functional.isReturn(p),
)