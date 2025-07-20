import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsReturnAsyncCustom_ClassClosure =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("ClassClosure")(
      ClassClosure,
    )((p: (input: ClassClosure) => Promise<ClassClosure>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
