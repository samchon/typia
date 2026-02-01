import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_equalsReturnAsync_ObjectInternal = (): Promise<void> => _test_functional_equalsReturnAsync(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
    typia.functional.equalsReturn(p),
)