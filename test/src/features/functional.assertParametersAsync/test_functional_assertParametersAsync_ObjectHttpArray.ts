import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectHttpArray =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.assertParameters(p),
  );
