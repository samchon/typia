import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateEqualsParameters_ArrayMatrix = (): void =>
  _test_functional_validateEqualsParameters("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      typia.functional.validateEqualsParameters(p),
  );
