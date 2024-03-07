import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_validateEqualsReturnAsync_ObjectGenericUnion =
  _test_functional_validateEqualsReturnAsync("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
    typia.functional.validateEqualsReturn(p),
  );
