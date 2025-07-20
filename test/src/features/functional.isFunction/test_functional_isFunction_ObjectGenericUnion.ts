import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_isFunction_ObjectGenericUnion = (): void =>
  _test_functional_isFunction("ObjectGenericUnion")(ObjectGenericUnion)(
    (p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
      typia.functional.isFunction(p),
  );
