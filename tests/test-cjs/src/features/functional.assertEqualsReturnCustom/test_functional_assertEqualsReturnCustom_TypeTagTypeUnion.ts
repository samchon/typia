import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_assertEqualsReturnCustom_TypeTagTypeUnion =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagTypeUnion")(
      TypeTagTypeUnion,
    )((p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
