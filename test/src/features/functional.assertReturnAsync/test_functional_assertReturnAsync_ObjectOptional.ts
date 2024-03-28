import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertReturnAsync_ObjectOptional =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.assertReturn(p),
  );
