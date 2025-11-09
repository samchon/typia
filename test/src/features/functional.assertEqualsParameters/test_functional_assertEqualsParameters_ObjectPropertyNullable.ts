import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_assertEqualsParameters_ObjectPropertyNullable =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "ObjectPropertyNullable",
    )(ObjectPropertyNullable)(
      (p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) =>
        typia.functional.assertEqualsParameters(p),
    );
