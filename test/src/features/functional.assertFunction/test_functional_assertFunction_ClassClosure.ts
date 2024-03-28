import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertFunction_ClassClosure =
  _test_functional_assertFunction(TypeGuardError)("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => ClassClosure) =>
      typia.functional.assertFunction(p),
  );
