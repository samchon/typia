import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateEqualsParameters_ObjectNullable =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectNullable")(ObjectNullable)(
      (p: (input: ObjectNullable) => ObjectNullable) =>
        typia.functional.validateEqualsParameters(p),
    );
