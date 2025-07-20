import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertEqualsParametersAsync_ObjectPrimitive =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ObjectPrimitive",
    )(ObjectPrimitive)(
      (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
        typia.functional.assertEqualsParameters(p),
    );
