import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_TypeTagFormat =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
    typia.functional.assertReturn(p),
  );
