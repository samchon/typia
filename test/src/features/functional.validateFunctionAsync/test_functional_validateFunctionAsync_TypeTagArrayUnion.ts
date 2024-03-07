import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_validateFunctionAsync_TypeTagArrayUnion =
  _test_functional_validateFunctionAsync("TypeTagArrayUnion")(
    TypeTagArrayUnion,
  )((p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
    typia.functional.validateFunction(p),
  );
