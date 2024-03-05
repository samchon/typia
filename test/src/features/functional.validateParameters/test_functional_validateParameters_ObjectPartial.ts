import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateParameters_ObjectPartial =
  _test_functional_validateParameters("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.validateParameters(p),
  );
