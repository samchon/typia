import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertFunctionAsync_ObjectGenericArray =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ObjectGenericArray")(
      ObjectGenericArray,
    )((p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
      typia.functional.assertFunction(p),
    );
