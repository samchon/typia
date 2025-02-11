import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsReturnAsync_ClassClosure =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.assertEqualsReturn(p),
  );
