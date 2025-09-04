import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_validateEqualsFunction_TypeTagArrayUnion =
  (): void =>
    _test_functional_validateEqualsFunction("TypeTagArrayUnion")(
      TypeTagArrayUnion,
    )((p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
      typia.functional.validateEqualsFunction(p),
    );
