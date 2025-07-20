import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertParametersAsync_ClassClosure =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ClassClosure")(
      ClassClosure,
    )((p: (input: ClassClosure) => Promise<ClassClosure>) =>
      typia.functional.assertParameters(p),
    );
