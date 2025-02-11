import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_assertEqualsParametersCustom_TypeTagTypeUnion =
  _test_functional_assertEqualsParameters(CustomGuardError)("TypeTagTypeUnion")(
    TypeTagTypeUnion,
  )((p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
