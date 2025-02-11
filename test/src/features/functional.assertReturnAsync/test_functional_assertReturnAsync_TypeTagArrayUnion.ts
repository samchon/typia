import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertReturnAsync_TypeTagArrayUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagArrayUnion")(
    TypeTagArrayUnion,
  )((p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
    typia.functional.assertReturn(p),
  );
