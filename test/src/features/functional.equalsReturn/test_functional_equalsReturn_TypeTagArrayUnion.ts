import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_equalsReturn_TypeTagArrayUnion = (): void =>
  _test_functional_equalsReturn("TypeTagArrayUnion")(TypeTagArrayUnion)(
    (p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
      typia.functional.equalsReturn(p),
  );
