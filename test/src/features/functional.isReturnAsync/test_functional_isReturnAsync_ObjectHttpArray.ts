import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_isReturnAsync_ObjectHttpArray = _test_functional_isReturnAsync(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.isReturn(p),
)