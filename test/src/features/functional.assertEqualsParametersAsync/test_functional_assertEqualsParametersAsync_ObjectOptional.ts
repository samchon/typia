import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsParametersAsync_ObjectOptional =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectOptional",
  )(ObjectOptional)((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.assertEqualsParameters(p),
  );
