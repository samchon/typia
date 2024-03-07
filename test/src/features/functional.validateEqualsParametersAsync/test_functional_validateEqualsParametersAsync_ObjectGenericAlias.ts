import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_validateEqualsParametersAsync_ObjectGenericAlias =
  _test_functional_validateEqualsParametersAsync("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
    typia.functional.validateEqualsParameters(p),
  );
