import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_equalsParameters_ObjectRecursive = (): void =>
  _test_functional_equalsParameters("ObjectRecursive")(ObjectRecursive)(
    (p: (input: ObjectRecursive) => ObjectRecursive) =>
      typia.functional.equalsParameters(p),
  );
