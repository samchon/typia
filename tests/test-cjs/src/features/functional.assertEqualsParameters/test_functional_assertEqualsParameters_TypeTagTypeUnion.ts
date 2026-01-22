import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_assertEqualsParameters_TypeTagTypeUnion =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagTypeUnion")(
      TypeTagTypeUnion,
    )((p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) =>
      typia.functional.assertEqualsParameters(p),
    );
