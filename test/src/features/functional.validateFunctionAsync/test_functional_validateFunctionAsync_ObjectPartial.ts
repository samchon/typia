import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateFunctionAsync_ObjectPartial =
  _test_functional_validateFunctionAsync("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
      typia.functional.validateFunction(p),
  );
