import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_TypeTagArrayUnion = (): Promise<void> => _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "TypeTagArrayUnion"
)(TypeTagArrayUnion)(
  (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
    typia.functional.assertEqualsParameters(p),
)