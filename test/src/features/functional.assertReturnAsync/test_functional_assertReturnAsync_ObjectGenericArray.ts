import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectGenericArray = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
    typia.functional.assertReturn(p),
)