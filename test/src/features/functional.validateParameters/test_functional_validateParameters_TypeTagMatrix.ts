import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_validateParameters_TypeTagMatrix = (): void =>
  _test_functional_validateParameters("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      typia.functional.validateParameters(p),
  );
