import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_assertEqualsReturnCustom_ObjectPropertyNullable =
  _test_functional_assertEqualsReturn(CustomGuardError)(
    "ObjectPropertyNullable",
  )(ObjectPropertyNullable)(
    (p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
