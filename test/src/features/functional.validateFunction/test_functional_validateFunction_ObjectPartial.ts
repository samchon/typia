import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateFunction_ObjectPartial =
  _test_functional_validateFunction("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.validateFunction(p),
  );
