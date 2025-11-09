import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_isFunctionAsync_TypeTagArrayUnion =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("TypeTagArrayUnion")(TypeTagArrayUnion)(
      (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
        typia.functional.isFunction(p),
    );
