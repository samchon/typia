import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TypeTagArrayUnion =
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagArrayUnion")(
    TypeTagArrayUnion,
  )((p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
    typia.functional.assertEqualsReturn(p),
  );
