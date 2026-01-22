import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_validateReturnAsync_ObjectGenericUnion =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectGenericUnion")(
      ObjectGenericUnion,
    )((p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
      typia.functional.validateReturn(p),
    );
