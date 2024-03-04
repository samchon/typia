import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertFunction_ObjectHttpArray =
  _test_functional_assertFunction(TypeGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => ObjectHttpArray) =>
    typia.functional.assertFunction(p),
  );
