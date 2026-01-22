import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertEqualsFunctionAsync_ObjectUnionComposite =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectUnionComposite",
    )(ObjectUnionComposite)(
      (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
        typia.functional.assertEqualsFunction(p),
    );
