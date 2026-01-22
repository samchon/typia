import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_validateEqualsFunctionAsync_TypeTagArrayUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("TypeTagArrayUnion")(
      TypeTagArrayUnion,
    )((p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
      typia.functional.validateEqualsFunction(p),
    );
