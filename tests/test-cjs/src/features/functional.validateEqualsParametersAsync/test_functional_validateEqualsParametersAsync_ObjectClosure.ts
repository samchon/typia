import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateEqualsParametersAsync_ObjectClosure =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ObjectClosure")(
      ObjectClosure,
    )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
      typia.functional.validateEqualsParameters(p),
    );
