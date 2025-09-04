import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertReturn_TypeTagFormat = (): void =>
  _test_functional_assertReturn(TypeGuardError)("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => TypeTagFormat) =>
      typia.functional.assertReturn(p),
  );
