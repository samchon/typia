import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertParameters_ObjectPartial = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => ObjectPartial) =>
    typia.functional.assertParameters(p),
  );
