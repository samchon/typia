import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_validateEqualsReturn_ObjectGenericUnion =
  _test_functional_validateEqualsReturn("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
    typia.functional.validateEqualsReturn(p),
  );
