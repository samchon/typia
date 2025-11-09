import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertEqualsFunctionCustom_TypeTagArrayUnion =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "TypeTagArrayUnion",
    )(TypeTagArrayUnion)((p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
