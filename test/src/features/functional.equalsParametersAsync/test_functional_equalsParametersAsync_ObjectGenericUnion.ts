import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_equalsParametersAsync_ObjectGenericUnion =
  _test_functional_equalsParametersAsync("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
    typia.functional.equalsParameters(p),
  );
