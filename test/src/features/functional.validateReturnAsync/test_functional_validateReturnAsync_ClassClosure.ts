import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateReturnAsync_ClassClosure =
  _test_functional_validateReturnAsync("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => Promise<ClassClosure>) =>
      typia.functional.validateReturn(p),
  );
