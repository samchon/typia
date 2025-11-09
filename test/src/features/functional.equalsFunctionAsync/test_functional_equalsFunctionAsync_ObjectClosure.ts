import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_equalsFunctionAsync_ObjectClosure = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.equalsFunction(p),
)