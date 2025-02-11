import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_equalsReturn_ObjectHttpUndefindable =
  _test_functional_equalsReturn("ObjectHttpUndefindable")(
    ObjectHttpUndefindable,
  )((p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
    typia.functional.equalsReturn(p),
  );
