import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertReturn_TypeTagArrayUnion =
  _test_functional_assertReturn(TypeGuardError)("TypeTagArrayUnion")(
    TypeTagArrayUnion,
  )((p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
    typia.functional.assertReturn(p),
  );
