import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertEqualsReturnAsync_TypeTagFormat =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
    typia.functional.assertEqualsReturn(p),
  );
