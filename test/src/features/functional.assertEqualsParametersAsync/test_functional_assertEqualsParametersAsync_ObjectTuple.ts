import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertEqualsParametersAsync_ObjectTuple =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)("ObjectTuple")(
      ObjectTuple,
    )((p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
      typia.functional.assertEqualsParameters(p),
    );
