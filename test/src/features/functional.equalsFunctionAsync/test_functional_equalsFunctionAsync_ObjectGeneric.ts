import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_equalsFunctionAsync_ObjectGeneric = _test_functional_equalsFunctionAsync(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.equalsFunction(p),
)