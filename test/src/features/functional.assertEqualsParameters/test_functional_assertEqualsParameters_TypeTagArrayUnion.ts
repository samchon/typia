import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertEqualsParameters_TypeTagArrayUnion =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "TypeTagArrayUnion",
    )(TypeTagArrayUnion)((p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
      typia.functional.assertEqualsParameters(p),
    );
