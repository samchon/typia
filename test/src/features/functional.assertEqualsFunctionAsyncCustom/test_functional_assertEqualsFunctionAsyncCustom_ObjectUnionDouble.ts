import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectUnionDouble =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectUnionDouble",
  )(ObjectUnionDouble)(
    (p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
