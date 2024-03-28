import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsFunction_ObjectPartial =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => ObjectPartial) =>
    typia.functional.assertEqualsFunction(p),
  );
