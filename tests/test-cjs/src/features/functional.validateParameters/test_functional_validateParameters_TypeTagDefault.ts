import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateParameters_TypeTagDefault = (): void =>
  _test_functional_validateParameters("TypeTagDefault")(TypeTagDefault)(
    (p: (input: TypeTagDefault) => TypeTagDefault) =>
      typia.functional.validateParameters(p),
  );
