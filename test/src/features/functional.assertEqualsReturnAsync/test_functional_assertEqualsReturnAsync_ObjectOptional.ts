import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsReturnAsync_ObjectOptional =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.assertEqualsReturn(p),
  );
