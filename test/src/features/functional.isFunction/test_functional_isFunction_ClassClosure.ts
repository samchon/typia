import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_isFunction_ClassClosure =
  _test_functional_isFunction("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => ClassClosure) =>
      typia.functional.isFunction(p),
  );
