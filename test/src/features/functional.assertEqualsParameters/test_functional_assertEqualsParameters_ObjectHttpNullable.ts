import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertEqualsParameters_ObjectHttpNullable =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "ObjectHttpNullable",
    )(ObjectHttpNullable)(
      (p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
        typia.functional.assertEqualsParameters(p),
    );
