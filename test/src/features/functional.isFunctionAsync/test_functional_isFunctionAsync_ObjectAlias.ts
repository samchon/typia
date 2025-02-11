import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_isFunctionAsync_ObjectAlias = _test_functional_isFunctionAsync(
  "ObjectAlias"
)(ObjectAlias)(
  (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.isFunction(p),
)