import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertParameters_ClassClosure =
  _test_functional_assertParameters(TypeGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => ClassClosure) =>
    typia.functional.assertParameters(p),
  );
