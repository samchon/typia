import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_equalsParameters_ObjectGeneric =
  _test_functional_equalsParameters("ObjectGeneric")(ObjectGeneric)(
    (p: (input: ObjectGeneric) => ObjectGeneric) =>
      typia.functional.equalsParameters(p),
  );
