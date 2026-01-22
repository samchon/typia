import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_isReturnAsync_TypeTagArrayUnion =
  (): Promise<void> =>
    _test_functional_isReturnAsync("TypeTagArrayUnion")(TypeTagArrayUnion)(
      (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
        typia.functional.isReturn(p),
    );
