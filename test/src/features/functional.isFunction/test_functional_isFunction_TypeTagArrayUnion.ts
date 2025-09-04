import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_isFunction_TypeTagArrayUnion = (): void =>
  _test_functional_isFunction("TypeTagArrayUnion")(TypeTagArrayUnion)(
    (p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
      typia.functional.isFunction(p),
  );
