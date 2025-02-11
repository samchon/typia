import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertEqualsReturnAsync_TypeTagType =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertEqualsReturn(p),
  );
