import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_isFunctionAsync_ObjectClosure = _test_functional_isFunctionAsync(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.isFunction(p),
)