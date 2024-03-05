import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateParameters_ObjectGeneric =
  _test_functional_validateParameters("ObjectGeneric")(ObjectGeneric)(
    (p: (input: ObjectGeneric) => ObjectGeneric) =>
      typia.functional.validateParameters(p),
  );
