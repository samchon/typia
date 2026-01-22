import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertEqualsReturnCustom_ObjectIntersection =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ObjectIntersection")(
      ObjectIntersection,
    )((p: (input: ObjectIntersection) => ObjectIntersection) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
