import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertEqualsFunctionAsync_TypeTagArrayUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "TypeTagArrayUnion",
    )(TypeTagArrayUnion)(
      (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
        typia.functional.assertEqualsFunction(p),
    );
