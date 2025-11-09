import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateParameters_ObjectRecursive = (): void =>
  _test_functional_validateParameters("ObjectRecursive")(ObjectRecursive)(
    (p: (input: ObjectRecursive) => ObjectRecursive) =>
      typia.functional.validateParameters(p),
  );
