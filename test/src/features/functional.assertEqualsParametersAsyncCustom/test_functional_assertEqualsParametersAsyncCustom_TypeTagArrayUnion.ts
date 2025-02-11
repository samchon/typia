import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagArrayUnion =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "TypeTagArrayUnion",
  )(TypeTagArrayUnion)(
    (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
