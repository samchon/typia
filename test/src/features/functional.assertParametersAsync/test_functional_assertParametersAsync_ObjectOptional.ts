import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectOptional =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.assertParameters(p),
  );
