import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertEqualsReturnAsync_TypeTagArrayUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "TypeTagArrayUnion",
    )(TypeTagArrayUnion)(
      (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
        typia.functional.assertEqualsReturn(p),
    );
