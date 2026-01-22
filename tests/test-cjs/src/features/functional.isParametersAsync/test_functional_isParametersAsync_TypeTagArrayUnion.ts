import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_isParametersAsync_TypeTagArrayUnion =
  (): Promise<void> =>
    _test_functional_isParametersAsync("TypeTagArrayUnion")(TypeTagArrayUnion)(
      (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
        typia.functional.isParameters(p),
    );
