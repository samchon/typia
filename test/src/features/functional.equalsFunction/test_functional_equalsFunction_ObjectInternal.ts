import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_equalsFunction_ObjectInternal =
  _test_functional_equalsFunction("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => ObjectInternal) =>
      typia.functional.equalsFunction(p),
  );
