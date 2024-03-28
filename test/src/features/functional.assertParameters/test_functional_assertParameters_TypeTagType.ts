import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertParameters_TypeTagType =
  _test_functional_assertParameters(TypeGuardError)("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) =>
      typia.functional.assertParameters(p),
  );
