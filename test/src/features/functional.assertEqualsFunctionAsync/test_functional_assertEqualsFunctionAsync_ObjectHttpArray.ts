import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertEqualsFunctionAsync_ObjectHttpArray =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectHttpArray",
    )(ObjectHttpArray)(
      (p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
        typia.functional.assertEqualsFunction(p),
    );
