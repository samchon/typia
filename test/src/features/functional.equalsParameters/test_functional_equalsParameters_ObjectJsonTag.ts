import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_equalsParameters_ObjectJsonTag =
  _test_functional_equalsParameters("ObjectJsonTag")(ObjectJsonTag)(
    (p: (input: ObjectJsonTag) => ObjectJsonTag) =>
      typia.functional.equalsParameters(p),
  );
