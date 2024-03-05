import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateEqualsParameters_ObjectUndefined =
  _test_functional_validateEqualsParameters("ObjectUndefined")(ObjectUndefined)(
    (p: (input: ObjectUndefined) => ObjectUndefined) =>
      typia.functional.validateEqualsParameters(p),
  );
