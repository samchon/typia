import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertEqualsFunctionCustom_ObjectHttpArray =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => ObjectHttpArray) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
