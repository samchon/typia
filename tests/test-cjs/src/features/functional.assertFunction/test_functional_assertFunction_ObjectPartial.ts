import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertFunction_ObjectPartial = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => ObjectPartial) =>
    typia.functional.assertFunction(p),
  );
