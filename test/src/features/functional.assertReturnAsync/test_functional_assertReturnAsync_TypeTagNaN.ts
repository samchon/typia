import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertReturnAsync_TypeTagNaN =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.assertReturn(p),
  );
