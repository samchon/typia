import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectHttpTypeTag =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectHttpTypeTag",
  )(ObjectHttpTypeTag)(
    (p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
