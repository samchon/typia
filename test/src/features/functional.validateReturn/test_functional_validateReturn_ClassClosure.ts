import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateReturn_ClassClosure =
  _test_functional_validateReturn("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => ClassClosure) =>
      typia.functional.validateReturn(p),
  );
