import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsReturn_ClassClosure =
  _test_functional_assertEqualsReturn(TypeGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => ClassClosure) =>
    typia.functional.assertEqualsReturn(p),
  );
