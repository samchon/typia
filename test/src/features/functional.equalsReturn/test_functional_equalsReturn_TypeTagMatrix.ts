import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_equalsReturn_TypeTagMatrix = (): void =>
  _test_functional_equalsReturn("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      typia.functional.equalsReturn(p),
  );
