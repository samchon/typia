import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertParametersAsyncCustom_ClassClosure =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ClassClosure")(
      ClassClosure,
    )((p: (input: ClassClosure) => Promise<ClassClosure>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
