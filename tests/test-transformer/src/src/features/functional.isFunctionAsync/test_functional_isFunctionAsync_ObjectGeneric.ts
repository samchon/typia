import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_isFunctionAsync_ObjectGeneric = (): Promise<void> => _test_functional_isFunctionAsync(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.isFunction(p),
)