import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_equalsFunction_ObjectAlias =
  _test_functional_equalsFunction("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.equalsFunction(p),
  );
