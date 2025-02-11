import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_equalsFunctionAsync_ObjectAlias = _test_functional_equalsFunctionAsync(
  "ObjectAlias"
)(ObjectAlias)(
  (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.equalsFunction(p),
)