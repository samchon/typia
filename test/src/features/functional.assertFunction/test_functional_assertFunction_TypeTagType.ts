import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertFunction_TypeTagType = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) =>
      typia.functional.assertFunction(p),
  );
