import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateEqualsParametersAsync_ObjectAlias =
  _test_functional_validateEqualsParametersAsync("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      typia.functional.validateEqualsParameters(p),
  );
