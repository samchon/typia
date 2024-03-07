import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateReturnAsync_ObjectClosure =
  _test_functional_validateReturnAsync("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
      typia.functional.validateReturn(p),
  );
