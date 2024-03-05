import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_equalsReturn_ObjectJsonTag =
  _test_functional_equalsReturn("ObjectJsonTag")(ObjectJsonTag)(
    (p: (input: ObjectJsonTag) => ObjectJsonTag) =>
      typia.functional.equalsReturn(p),
  );
