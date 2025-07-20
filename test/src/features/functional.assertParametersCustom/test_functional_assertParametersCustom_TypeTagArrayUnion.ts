import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertParametersCustom_TypeTagArrayUnion =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("TypeTagArrayUnion")(
      TypeTagArrayUnion,
    )((p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
