import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertFunction_TypeTagFormat = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => TypeTagFormat) =>
    typia.functional.assertFunction(p),
  );
