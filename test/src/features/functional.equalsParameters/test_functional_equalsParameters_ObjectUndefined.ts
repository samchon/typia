import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_equalsParameters_ObjectUndefined =
  _test_functional_equalsParameters("ObjectUndefined")(ObjectUndefined)(
    (p: (input: ObjectUndefined) => ObjectUndefined) =>
      typia.functional.equalsParameters(p),
  );
