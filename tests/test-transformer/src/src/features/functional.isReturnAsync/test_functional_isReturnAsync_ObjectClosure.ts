import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_isReturnAsync_ObjectClosure = (): Promise<void> => _test_functional_isReturnAsync(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.isReturn(p),
)