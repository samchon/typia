import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_TypeTagFormat =
  _test_functional_assertReturn(TypeGuardError)("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => TypeTagFormat) =>
      typia.functional.assertReturn(p),
  );
