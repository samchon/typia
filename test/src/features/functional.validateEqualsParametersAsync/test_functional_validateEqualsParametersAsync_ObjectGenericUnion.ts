import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_validateEqualsParametersAsync_ObjectGenericUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ObjectGenericUnion")(
      ObjectGenericUnion,
    )((p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
      typia.functional.validateEqualsParameters(p),
    );
