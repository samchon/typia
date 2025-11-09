import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_assertEqualsFunctionAsync_ObjectHttpUndefindable =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectHttpUndefindable",
    )(ObjectHttpUndefindable)(
      (p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
        typia.functional.assertEqualsFunction(p),
    );
