import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_equalsFunctionAsync_ObjectInternal = _test_functional_equalsFunctionAsync(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
    typia.functional.equalsFunction(p),
)