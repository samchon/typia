import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsFunctionAsync_ObjectOptional =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectOptional",
    )(ObjectOptional)((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
      typia.functional.assertEqualsFunction(p),
    );
