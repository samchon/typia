import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertReturnAsync_TypeTagDefault =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.assertReturn(p),
  );
