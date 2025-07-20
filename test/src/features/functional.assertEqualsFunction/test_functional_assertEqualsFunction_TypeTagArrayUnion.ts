import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertEqualsFunction_TypeTagArrayUnion =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagArrayUnion")(
      TypeTagArrayUnion,
    )((p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
      typia.functional.assertEqualsFunction(p),
    );
