import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertReturnAsyncCustom_ClassClosure =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ClassClosure")(
      ClassClosure,
    )((p: (input: ClassClosure) => Promise<ClassClosure>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
