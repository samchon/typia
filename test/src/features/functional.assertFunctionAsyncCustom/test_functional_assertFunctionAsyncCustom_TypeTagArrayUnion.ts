import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertFunctionAsyncCustom_TypeTagArrayUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagArrayUnion")(
      TypeTagArrayUnion,
    )((p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
