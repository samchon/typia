import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_validateParameters_ObjectUnionDouble =
  _test_functional_validateParameters("ObjectUnionDouble")(ObjectUnionDouble)(
    (p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
      typia.functional.validateParameters(p),
  );
