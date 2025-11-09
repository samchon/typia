import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertEqualsFunctionAsync_ObjectUnionExplicit =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectUnionExplicit",
    )(ObjectUnionExplicit)(
      (p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
        typia.functional.assertEqualsFunction(p),
    );
