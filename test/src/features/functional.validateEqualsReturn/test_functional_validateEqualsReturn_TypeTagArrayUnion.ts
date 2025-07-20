import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_validateEqualsReturn_TypeTagArrayUnion =
  (): void =>
    _test_functional_validateEqualsReturn("TypeTagArrayUnion")(
      TypeTagArrayUnion,
    )((p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
      typia.functional.validateEqualsReturn(p),
    );
