import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertEqualsParametersAsync_TypeTagArrayUnion =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "TypeTagArrayUnion",
  )(TypeTagArrayUnion)(
    (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
      typia.functional.assertEqualsParameters(p),
  );
