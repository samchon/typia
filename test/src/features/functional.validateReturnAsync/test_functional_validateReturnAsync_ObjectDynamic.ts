import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_validateReturnAsync_ObjectDynamic = (): Promise<void> => _test_functional_validateReturnAsync(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
    typia.functional.validateReturn(p),
)