import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_isReturnAsync_ObjectDynamic = (): Promise<void> => _test_functional_isReturnAsync(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
    typia.functional.isReturn(p),
)