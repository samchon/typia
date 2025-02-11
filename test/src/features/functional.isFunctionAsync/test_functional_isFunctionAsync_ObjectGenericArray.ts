import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_isFunctionAsync_ObjectGenericArray = _test_functional_isFunctionAsync(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
    typia.functional.isFunction(p),
)