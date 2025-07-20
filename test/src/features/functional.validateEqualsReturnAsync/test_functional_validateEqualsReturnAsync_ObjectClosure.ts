import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateEqualsReturnAsync_ObjectClosure =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ObjectClosure")(ObjectClosure)(
      (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
        typia.functional.validateEqualsReturn(p),
    );
