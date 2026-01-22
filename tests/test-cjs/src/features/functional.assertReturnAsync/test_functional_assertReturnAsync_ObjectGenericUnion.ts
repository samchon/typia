import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertReturnAsync_ObjectGenericUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectGenericUnion")(
      ObjectGenericUnion,
    )((p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
      typia.functional.assertReturn(p),
    );
