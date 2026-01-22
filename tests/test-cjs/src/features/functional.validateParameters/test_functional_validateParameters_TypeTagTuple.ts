import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateParameters_TypeTagTuple = (): void =>
  _test_functional_validateParameters("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.validateParameters(p),
  );
