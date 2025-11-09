import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateEqualsParameters_ObjectGeneric =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectGeneric")(ObjectGeneric)(
      (p: (input: ObjectGeneric) => ObjectGeneric) =>
        typia.functional.validateEqualsParameters(p),
    );
