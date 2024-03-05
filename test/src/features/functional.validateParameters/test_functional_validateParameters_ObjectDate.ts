import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_validateParameters_ObjectDate =
  _test_functional_validateParameters("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => ObjectDate) =>
      typia.functional.validateParameters(p),
  );
