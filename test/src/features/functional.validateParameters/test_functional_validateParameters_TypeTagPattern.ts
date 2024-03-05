import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateParameters_TypeTagPattern =
  _test_functional_validateParameters("TypeTagPattern")(TypeTagPattern)(
    (p: (input: TypeTagPattern) => TypeTagPattern) =>
      typia.functional.validateParameters(p),
  );
