import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertParameters_TypeTagArrayUnion =
  _test_functional_assertParameters(TypeGuardError)("TypeTagArrayUnion")(
    TypeTagArrayUnion,
  )((p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
    typia.functional.assertParameters(p),
  );
