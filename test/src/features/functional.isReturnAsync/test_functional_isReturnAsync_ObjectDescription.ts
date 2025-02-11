import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_isReturnAsync_ObjectDescription = _test_functional_isReturnAsync(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
    typia.functional.isReturn(p),
)