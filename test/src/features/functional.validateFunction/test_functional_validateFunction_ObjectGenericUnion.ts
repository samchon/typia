import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_validateFunction_ObjectGenericUnion = (): void =>
  _test_functional_validateFunction("ObjectGenericUnion")(ObjectGenericUnion)(
    (p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
      typia.functional.validateFunction(p),
  );
