import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_TypeTagTypeUnion =
  _test_functional_assertParameters(TypeGuardError)("TypeTagTypeUnion")(
    TypeTagTypeUnion,
  )((p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) =>
    typia.functional.assertParameters(p),
  );
