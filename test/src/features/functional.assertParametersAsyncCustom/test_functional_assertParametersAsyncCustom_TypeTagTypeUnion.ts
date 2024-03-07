import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_TypeTagTypeUnion =
  _test_functional_assertParametersAsync(CustomGuardError)("TypeTagTypeUnion")(
    TypeTagTypeUnion,
  )((p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
