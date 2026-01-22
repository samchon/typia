import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectOptional =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "ObjectOptional",
    )(ObjectOptional)((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
