import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateEqualsParametersAsync_ObjectSimple =
  _test_functional_validateEqualsParametersAsync("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
      typia.functional.validateEqualsParameters(p),
  );
