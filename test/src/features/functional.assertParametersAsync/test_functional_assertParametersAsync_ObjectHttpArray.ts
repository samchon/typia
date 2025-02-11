import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertParametersAsync_ObjectHttpArray =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.assertParameters(p),
  );
