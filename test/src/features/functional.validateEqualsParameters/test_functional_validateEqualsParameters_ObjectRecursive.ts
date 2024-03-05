import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateEqualsParameters_ObjectRecursive =
  _test_functional_validateEqualsParameters("ObjectRecursive")(ObjectRecursive)(
    (p: (input: ObjectRecursive) => ObjectRecursive) =>
      typia.functional.validateEqualsParameters(p),
  );
