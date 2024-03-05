import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_validateEqualsFunction_ObjectGenericUnion =
  _test_functional_validateEqualsFunction("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
    typia.functional.validateEqualsFunction(p),
  );
