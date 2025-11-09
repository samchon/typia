import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateReturnAsync_ObjectInternal = (): Promise<void> => _test_functional_validateReturnAsync(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
    typia.functional.validateReturn(p),
)