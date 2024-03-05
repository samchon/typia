import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_equalsParameters_ObjectHttpNullable =
  _test_functional_equalsParameters("ObjectHttpNullable")(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
      typia.functional.equalsParameters(p),
  );
