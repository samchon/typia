import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectHttpArray =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.assertFunction(p),
  );
