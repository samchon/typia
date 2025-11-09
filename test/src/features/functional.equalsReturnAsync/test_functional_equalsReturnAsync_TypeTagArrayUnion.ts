import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_equalsReturnAsync_TypeTagArrayUnion =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("TypeTagArrayUnion")(TypeTagArrayUnion)(
      (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
        typia.functional.equalsReturn(p),
    );
