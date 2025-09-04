import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsFunctionAsync_ClassClosure =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ClassClosure")(
      ClassClosure,
    )((p: (input: ClassClosure) => Promise<ClassClosure>) =>
      typia.functional.assertEqualsFunction(p),
    );
