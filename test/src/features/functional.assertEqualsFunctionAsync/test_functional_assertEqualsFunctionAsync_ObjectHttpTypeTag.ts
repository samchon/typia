import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_assertEqualsFunctionAsync_ObjectHttpTypeTag =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ObjectHttpTypeTag",
  )(ObjectHttpTypeTag)(
    (p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
      typia.functional.assertEqualsFunction(p),
  );
