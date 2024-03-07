import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateParametersAsync_TypeTagDefault =
  _test_functional_validateParametersAsync("TypeTagDefault")(TypeTagDefault)(
    (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
      typia.functional.validateParameters(p),
  );
