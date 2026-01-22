import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertReturnAsync_ObjectClosure =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectClosure")(
      ObjectClosure,
    )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
      typia.functional.assertReturn(p),
    );
