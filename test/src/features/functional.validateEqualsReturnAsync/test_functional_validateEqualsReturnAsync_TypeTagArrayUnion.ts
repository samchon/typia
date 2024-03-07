import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_validateEqualsReturnAsync_TypeTagArrayUnion =
  _test_functional_validateEqualsReturnAsync("TypeTagArrayUnion")(
    TypeTagArrayUnion,
  )((p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
    typia.functional.validateEqualsReturn(p),
  );
