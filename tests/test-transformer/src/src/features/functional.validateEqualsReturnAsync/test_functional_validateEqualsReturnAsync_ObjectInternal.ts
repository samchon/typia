import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateEqualsReturnAsync_ObjectInternal = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
    typia.functional.validateEqualsReturn(p),
)