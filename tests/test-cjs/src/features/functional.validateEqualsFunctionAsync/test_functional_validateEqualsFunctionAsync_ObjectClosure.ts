import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateEqualsFunctionAsync_ObjectClosure =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectClosure")(
      ObjectClosure,
    )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
      typia.functional.validateEqualsFunction(p),
    );
