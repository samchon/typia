import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertEqualsFunctionAsync_ObjectUnionDouble =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectUnionDouble",
    )(ObjectUnionDouble)(
      (p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
        typia.functional.assertEqualsFunction(p),
    );
