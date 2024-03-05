import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_equalsFunction_ObjectSimple =
  _test_functional_equalsFunction("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      typia.functional.equalsFunction(p),
  );
