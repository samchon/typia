import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_equalsFunction_ObjectUnionDouble =
  _test_functional_equalsFunction("ObjectUnionDouble")(ObjectUnionDouble)(
    (p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
      typia.functional.equalsFunction(p),
  );
