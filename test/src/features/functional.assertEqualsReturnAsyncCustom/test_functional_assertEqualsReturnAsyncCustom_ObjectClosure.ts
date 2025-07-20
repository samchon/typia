import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectClosure =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("ObjectClosure")(
      ObjectClosure,
    )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
