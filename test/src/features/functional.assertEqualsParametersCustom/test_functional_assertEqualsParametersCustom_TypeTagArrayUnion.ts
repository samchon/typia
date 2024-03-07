import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_TypeTagArrayUnion =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "TypeTagArrayUnion",
  )(TypeTagArrayUnion)((p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
