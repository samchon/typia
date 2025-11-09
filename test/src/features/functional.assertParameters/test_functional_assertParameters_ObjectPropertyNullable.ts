import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_assertParameters_ObjectPropertyNullable =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)("ObjectPropertyNullable")(
      ObjectPropertyNullable,
    )((p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) =>
      typia.functional.assertParameters(p),
    );
