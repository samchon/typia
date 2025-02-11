import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_assertEqualsFunctionCustom_ObjectPropertyNullable =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ObjectPropertyNullable",
  )(ObjectPropertyNullable)(
    (p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
