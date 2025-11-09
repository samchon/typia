import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_isReturn_TypeTagArrayUnion = (): void =>
  _test_functional_isReturn("TypeTagArrayUnion")(TypeTagArrayUnion)(
    (p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
      typia.functional.isReturn(p),
  );
