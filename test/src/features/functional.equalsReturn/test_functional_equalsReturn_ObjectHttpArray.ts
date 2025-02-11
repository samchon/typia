import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_equalsReturn_ObjectHttpArray =
  _test_functional_equalsReturn("ObjectHttpArray")(ObjectHttpArray)(
    (p: (input: ObjectHttpArray) => ObjectHttpArray) =>
      typia.functional.equalsReturn(p),
  );
