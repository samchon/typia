import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ObjectPrimitive =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectPrimitive",
  )(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
      typia.functional.assertEqualsParameters(p),
  );
