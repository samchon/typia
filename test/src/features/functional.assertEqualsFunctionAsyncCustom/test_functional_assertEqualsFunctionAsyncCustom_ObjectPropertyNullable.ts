import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectPropertyNullable =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectPropertyNullable",
  )(ObjectPropertyNullable)(
    (p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
