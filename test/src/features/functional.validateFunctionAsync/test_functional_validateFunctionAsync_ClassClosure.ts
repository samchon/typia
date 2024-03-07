import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateFunctionAsync_ClassClosure =
  _test_functional_validateFunctionAsync("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => Promise<ClassClosure>) =>
      typia.functional.validateFunction(p),
  );
