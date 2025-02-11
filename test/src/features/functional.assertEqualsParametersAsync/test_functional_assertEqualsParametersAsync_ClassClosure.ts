import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsParametersAsync_ClassClosure =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.assertEqualsParameters(p),
  );
