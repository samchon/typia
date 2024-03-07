import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_TypeTagArrayUnion =
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagArrayUnion")(
    TypeTagArrayUnion,
  )((p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
    typia.functional.assertEqualsParameters(p),
  );
