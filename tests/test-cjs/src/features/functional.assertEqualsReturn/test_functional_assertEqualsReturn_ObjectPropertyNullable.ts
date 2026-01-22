import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_assertEqualsReturn_ObjectPropertyNullable =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)(
      "ObjectPropertyNullable",
    )(ObjectPropertyNullable)(
      (p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) =>
        typia.functional.assertEqualsReturn(p),
    );
