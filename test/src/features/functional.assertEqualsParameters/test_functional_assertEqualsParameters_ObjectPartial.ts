import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsParameters_ObjectPartial =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => ObjectPartial) =>
    typia.functional.assertEqualsParameters(p),
  );
