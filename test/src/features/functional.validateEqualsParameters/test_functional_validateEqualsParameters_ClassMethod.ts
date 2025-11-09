import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateEqualsParameters_ClassMethod = (): void =>
  _test_functional_validateEqualsParameters("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.validateEqualsParameters(p),
  );
