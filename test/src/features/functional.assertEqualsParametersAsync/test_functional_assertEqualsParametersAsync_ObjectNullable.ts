import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertEqualsParametersAsync_ObjectNullable =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectNullable",
  )(ObjectNullable)((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
    typia.functional.assertEqualsParameters(p),
  );
