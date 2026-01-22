import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertEqualsParameters_TypeTagObjectUnion =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "TypeTagObjectUnion",
    )(TypeTagObjectUnion)(
      (p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
        typia.functional.assertEqualsParameters(p),
    );
