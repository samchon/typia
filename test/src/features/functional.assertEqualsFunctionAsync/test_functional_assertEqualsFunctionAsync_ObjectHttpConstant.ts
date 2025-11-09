import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertEqualsFunctionAsync_ObjectHttpConstant =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectHttpConstant",
    )(ObjectHttpConstant)(
      (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
        typia.functional.assertEqualsFunction(p),
    );
