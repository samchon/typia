import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertEqualsParameters_ObjectGenericArray =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "ObjectGenericArray",
    )(ObjectGenericArray)(
      (p: (input: ObjectGenericArray) => ObjectGenericArray) =>
        typia.functional.assertEqualsParameters(p),
    );
