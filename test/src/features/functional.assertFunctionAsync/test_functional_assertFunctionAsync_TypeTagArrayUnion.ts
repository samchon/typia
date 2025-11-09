import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertFunctionAsync_TypeTagArrayUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagArrayUnion")(
      TypeTagArrayUnion,
    )((p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
      typia.functional.assertFunction(p),
    );
