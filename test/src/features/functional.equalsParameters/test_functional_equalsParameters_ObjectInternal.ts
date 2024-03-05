import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_equalsParameters_ObjectInternal =
  _test_functional_equalsParameters("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => ObjectInternal) =>
      typia.functional.equalsParameters(p),
  );
