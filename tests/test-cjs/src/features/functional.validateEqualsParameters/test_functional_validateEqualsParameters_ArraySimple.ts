import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateEqualsParameters_ArraySimple = (): void =>
  _test_functional_validateEqualsParameters("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.validateEqualsParameters(p),
  );
