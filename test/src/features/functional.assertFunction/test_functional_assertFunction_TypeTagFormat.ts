import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_TypeTagFormat =
  _test_functional_assertFunction(TypeGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => TypeTagFormat) =>
    typia.functional.assertFunction(p),
  );
