import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_validateEqualsParameters_ObjectHttpNullable =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectHttpNullable")(
      ObjectHttpNullable,
    )((p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
      typia.functional.validateEqualsParameters(p),
    );
