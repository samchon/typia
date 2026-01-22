import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertReturnAsync_ClassClosure =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ClassClosure")(
      ClassClosure,
    )((p: (input: ClassClosure) => Promise<ClassClosure>) =>
      typia.functional.assertReturn(p),
    );
