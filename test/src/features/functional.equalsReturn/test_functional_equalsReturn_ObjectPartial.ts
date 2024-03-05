import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_equalsReturn_ObjectPartial =
  _test_functional_equalsReturn("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.equalsReturn(p),
  );
